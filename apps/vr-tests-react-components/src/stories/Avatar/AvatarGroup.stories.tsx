import * as React from 'react';
import Screener from 'screener-storybook/src/screener';
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  AvatarGroupPopoverProps,
  AvatarGroupProps,
  partitionAvatarGroupItems,
} from '@fluentui/react-avatar';
import { TestWrapperDecorator } from '../../utilities/TestWrapperDecorator';
import { ComponentMeta } from '@storybook/react';
import { getStoryVariant, DARK_MODE, HIGH_CONTRAST } from '../../utilities/index';
import { names } from './utils';

const sizes = [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128];

const AvatarGroupList: React.FC<
  AvatarGroupProps & { overflowIndicator?: AvatarGroupPopoverProps['indicator'] }
> = props => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({ items: names, layout: props.layout });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px', padding: '10px' }}>
      {sizes.map(size => (
        <AvatarGroup key={size} size={size as AvatarGroupProps['size']} {...props}>
          {inlineItems.map(name => (
            <AvatarGroupItem key={name} name={name} />
          ))}
          {overflowItems && (
            <AvatarGroupPopover indicator={props.overflowIndicator}>
              {overflowItems.map(name => (
                <AvatarGroupItem key={name} name={name} />
              ))}
            </AvatarGroupPopover>
          )}
        </AvatarGroup>
      ))}
    </div>
  );
};

export default {
  title: 'AvatarGroup Converged',
  component: AvatarGroup,
  decorators: [
    TestWrapperDecorator,
    story => (
      <Screener steps={new Screener.Steps().snapshot('default', { cropTo: '.testWrapper' }).end()}>{story()}</Screener>
    ),
  ],
} as ComponentMeta<typeof AvatarGroup>;

export const Basic = () => <AvatarGroupList />;
Basic.storyName = 'basic';

export const BasicHighContrast = getStoryVariant(Basic, HIGH_CONTRAST);
export const BasicDarkMode = getStoryVariant(Basic, DARK_MODE);

export const LayoutStack = () => <AvatarGroupList layout="stack" />;
LayoutStack.storyName = 'layoutStack';

export const LayoutStackHighContrast = getStoryVariant(LayoutStack, HIGH_CONTRAST);
export const LayoutStackDarkMode = getStoryVariant(LayoutStack, DARK_MODE);

export const LayoutPie1 = () => (
  <div style={{ padding: '10px' }}>
    <AvatarGroup layout="pie">
      <AvatarGroupItem name={names[0]} />
      <AvatarGroupPopover>
        <AvatarGroupItem name={names[0]} />
      </AvatarGroupPopover>
    </AvatarGroup>
  </div>
);
LayoutPie1.storyName = 'layoutPie-1';

export const LayoutPie1HighContrast = getStoryVariant(LayoutPie1, HIGH_CONTRAST);
export const LayoutPie1DarkMode = getStoryVariant(LayoutPie1, DARK_MODE);

export const LayoutPie2 = () => (
  <div style={{ padding: '10px' }}>
    <AvatarGroup layout="pie">
      <AvatarGroupItem name={names[0]} />
      <AvatarGroupItem name={names[1]} />
      <AvatarGroupPopover>
        <AvatarGroupItem name={names[0]} />
        <AvatarGroupItem name={names[1]} />
      </AvatarGroupPopover>
    </AvatarGroup>
  </div>
);
LayoutPie2.storyName = 'layoutPie-2';

export const LayoutPie2HighContrast = getStoryVariant(LayoutPie2, HIGH_CONTRAST);
export const LayoutPie2DarkMode = getStoryVariant(LayoutPie2, DARK_MODE);

export const LayoutPie = () => <AvatarGroupList layout="pie" />;
LayoutPie.storyName = 'layoutPie';

export const LayoutPieHighContrast = getStoryVariant(LayoutPie, HIGH_CONTRAST);
export const LayoutPieDarkMode = getStoryVariant(LayoutPie, DARK_MODE);

export const OverflowIndicator = () => <AvatarGroupList overflowIndicator="icon" />;
OverflowIndicator.storyName = 'overflowIndicator';

export const OverflowIndicatorHighContrast = getStoryVariant(OverflowIndicator, HIGH_CONTRAST);
export const OverflowIndicatorDarkMode = getStoryVariant(OverflowIndicator, DARK_MODE);
