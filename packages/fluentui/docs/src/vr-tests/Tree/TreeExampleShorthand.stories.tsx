import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Tree, treeTitleClassName, treeItemClassName } from '@fluentui/react-northstar';
import { getThemeStoryVariant, keys } from '../utilities';
import TreeExampleShorthand from '../../examples/components/Tree/Types/TreeExample.shorthand';

const selectors = {
  treeItem: (itemIndex: number) => `.${treeItemClassName}:nth-of-type(${itemIndex})`,
  treeTitle: (itemIndex: number) => `.${treeItemClassName}:nth-of-type(${itemIndex}) .${treeTitleClassName}`,
};

export default {
  component: Tree,
  title: 'Tree',
  decorators: [
    story => (
      <StoryWright
        steps={new Steps()
          .click(selectors.treeTitle(1))
          .snapshot('Focus on click subtree')
          .keys(selectors.treeItem(2), keys.downArrow)
          .snapshot('Focus on keyboard subtree')
          .click(selectors.treeTitle(2))
          .keys(selectors.treeItem(2), keys.downArrow)
          .snapshot('Focus on keyboard leaf')
          .click(selectors.treeTitle(4))
          .snapshot('Focus on click leaf')
          .end()}
      >
        {story()}
      </StoryWright>
    ),
  ],
} as ComponentMeta<typeof Tree>;

const TreeExampleShorthandTeams = getThemeStoryVariant(TreeExampleShorthand, 'teamsV2');

const TreeExampleShorthandTeamsDark = getThemeStoryVariant(TreeExampleShorthand, 'teamsDarkV2');

const TreeExampleShorthandTeamsHighContrast = getThemeStoryVariant(TreeExampleShorthand, 'teamsHighContrast');

export {
  TreeExampleShorthand,
  TreeExampleShorthandTeams,
  TreeExampleShorthandTeamsDark,
  TreeExampleShorthandTeamsHighContrast,
};
