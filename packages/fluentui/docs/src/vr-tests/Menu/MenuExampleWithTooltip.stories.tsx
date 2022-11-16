import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Menu, menuClassName } from '@fluentui/react-northstar';
import { getThemeStoryVariant, keys } from '../utilities';
import MenuExampleWithTooltip from '../../examples/components/Menu/Usage/MenuExampleWithTooltip.shorthand';

const selectors = {
  menu: `.${menuClassName}`,
  item: (itemIndex: number) => `.${menuClassName} li:nth-child(${itemIndex}) a`,
};

export default {
  component: Menu,
  title: 'Menu',
  decorators: [
    story => (
      <StoryWright
        steps={new Steps()
          .hover(selectors.item(1))
          .snapshot('Hovers 1st item (show tooltip)')
          .click(selectors.item(1))
          .keys(selectors.item(1), keys.rightArrow)
          .snapshot('Navigates to next item (shows tooltip)')
          .end()}
      >
        {story()}
      </StoryWright>
    ),
  ],
} as ComponentMeta<typeof Menu>;

const MenuExampleWithTooltipTeams = getThemeStoryVariant(MenuExampleWithTooltip, 'teamsV2');

const MenuExampleWithTooltipTeamsDark = getThemeStoryVariant(MenuExampleWithTooltip, 'teamsDarkV2');

const MenuExampleWithTooltipTeamsHighContrast = getThemeStoryVariant(MenuExampleWithTooltip, 'teamsHighContrast');

export {
  MenuExampleWithTooltip,
  MenuExampleWithTooltipTeams,
  MenuExampleWithTooltipTeamsDark,
  MenuExampleWithTooltipTeamsHighContrast,
};
