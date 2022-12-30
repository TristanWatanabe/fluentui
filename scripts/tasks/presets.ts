import { task, series, parallel, condition, option, addResolvePath } from 'just-scripts';

import path from 'path';
import fs from 'fs';

import { isConvergedPackage } from '../monorepo';

import { babel } from './babel';
import { clean } from './clean';
import { copy, copyCompiled } from './copy';
import { jest as jestTask, jestWatch } from './jest';
import { sass } from './sass';
import { ts, tsDeclarationFilesEmit } from './ts';
import { swc } from './swc';
import { eslint } from './eslint';
import { webpack, webpackDevServer } from './webpack';
import { apiExtractor } from './api-extractor';
import { lintImports } from './lint-imports';
import { prettier } from './prettier';
import { postprocessTask } from './postprocess';
import { postprocessAmdTask } from './postprocess-amd';
import { startStorybookTask, buildStorybookTask } from './storybook';
import { getJustArgv } from './argv';

/** Do only the bare minimum setup of options and resolve paths */
export function basicPreset() {
  // this adds a resolve path for the build tooling deps like TS from the scripts folder
  addResolvePath(__dirname);

  option('production');

  option('webpackConfig', { alias: 'w' });

  option('cached', { default: false } as any);

  option('registry', { default: 'https://registry.npmjs.org' } as any);

  option('push', { default: true } as any);

  option('package', { alias: 'p' });
}

export function preset() {
  basicPreset();

  const args = getJustArgv();

  task('no-op', () => {}).cached!();
  task('clean', clean);
  task('copy', copy);
  task('copy-compiled', copyCompiled);
  task('jest', jestTask);
  task('jest-watch', jestWatch);
  task('sass', sass());
  task('ts:postprocess', postprocessTask());
  task('postprocess:amd', postprocessAmdTask);
  task('ts:commonjs', ts.commonjs);
  task('ts:esm', ts.esm);
  task('ts:amd', series(ts.amd, 'postprocess:amd'));
  task('eslint', eslint);
  task('webpack', webpack);
  task('webpack-dev-server', webpackDevServer(args));
  task('api-extractor', apiExtractor());
  task('lint-imports', lintImports);
  task('prettier', prettier);
  task('storybook:start', startStorybookTask());
  task('storybook:build', buildStorybookTask());
  task('babel:postprocess', babel);
  task('swc:commonjs', swc.commonjs);
  task('swc:esm', swc.esm);
  task('swc:amd', swc.amd);

  task('swc:compile', () => {
    const moduleFlag = args.module;
    // default behaviour
    if (!moduleFlag) {
      return parallel(
        // 'swc:commonjs',
        //testing to see if build works when using old TS commonjs transpilation
        'ts:commonjs',
        'swc:esm',
        condition('swc:amd', () => !!args.production && !isConvergedPackage()),
      );
    }

    return parallel(
      condition('swc:commonjs', () => moduleFlag.cjs),
      condition('swc:esm', () => moduleFlag.esm),
      condition('swc:amd', () => moduleFlag.amd),
    );
  });

  task('swc', () => {
    return series(
      'ts:declaration-files-emit',
      'swc:compile',
      'copy-compiled',
      condition('babel:postprocess', () => fs.existsSync(path.join(process.cwd(), '.babelrc.json'))),
    );
  });

  task('ts:declaration-files-emit', tsDeclarationFilesEmit);

  task('ts:compile', () => {
    const moduleFlag = args.module;
    // default behaviour
    if (!moduleFlag) {
      return parallel(
        'ts:commonjs',
        'ts:esm',
        condition('ts:amd', () => !!args.production && !isConvergedPackage()),
      );
    }

    return parallel(
      condition('ts:commonjs', () => moduleFlag.cjs),
      condition('ts:esm', () => moduleFlag.esm),
      condition('ts:amd', () => moduleFlag.amd),
    );
  });

  task('ts', () => {
    return series(
      'ts:compile',
      'copy-compiled',
      'ts:postprocess',
      condition('babel:postprocess', () => fs.existsSync(path.join(process.cwd(), '.babelrc.json'))),
    );
  });

  task(
    'test',
    condition('jest', () => fs.existsSync(path.join(process.cwd(), 'jest.config.js'))),
  );

  task(
    'lint',
    parallel(
      condition('lint-imports', () => !isConvergedPackage()),
      'eslint',
    ),
  );

  task('code-style', series('prettier', 'lint'));

  task('dev:storybook', series('storybook:start'));
  task('dev', series('copy', 'sass', 'webpack-dev-server'));

  task('build:node-lib', series('clean', 'copy', 'ts:commonjs')).cached!();

  task('build', series('clean', 'copy', 'sass', isConvergedPackage() ? 'swc' : 'ts', 'api-extractor')).cached!();

  task(
    'bundle',
    condition('webpack', () => fs.existsSync(path.join(process.cwd(), 'webpack.config.js'))),
  );
}

if (process.cwd() === __dirname) {
  // load the preset if this is being run within the scripts package
  preset();
}
