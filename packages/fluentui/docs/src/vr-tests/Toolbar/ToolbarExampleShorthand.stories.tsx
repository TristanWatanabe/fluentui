import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener, { Steps } from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Toolbar, toolbarClassName, toolbarItemClassName } from '@fluentui/react-northstar';
import { getThemeStoryVariant, keys } from '../utilities';
import ToolbarExampleShorthand from '../../examples/components/Toolbar/Usage/ToolbarExampleWithTooltip.shorthand';

const selectors = {
  item: (itemIndex: number) => `.${toolbarClassName} .${toolbarItemClassName}:nth-child(${itemIndex})`,
};

export default {
  component: Toolbar,
  title: 'Toolbar',
  decorators: [
    story => (
      <Screener
        steps={new Steps()
          .hover(selectors.item(1))
          .snapshot('Hovers 1st item (show tooltip)')
          .click(selectors.item(1))
          .keys(selectors.item(1), keys.rightArrow)
          .snapshot('Navigates to next item (shows tooltip)')
          .end()}
      >
        {story()}
      </Screener>
    ),
  ],
} as ComponentMeta<typeof Toolbar>;

const ToolbarExampleShorthandTeams = getThemeStoryVariant(ToolbarExampleShorthand, 'teamsV2');

const ToolbarExampleShorthandTeamsDark = getThemeStoryVariant(ToolbarExampleShorthand, 'teamsDarkV2');

const ToolbarExampleShorthandTeamsHighContrast = getThemeStoryVariant(ToolbarExampleShorthand, 'teamsHighContrast');

export {
  ToolbarExampleShorthand,
  ToolbarExampleShorthandTeams,
  ToolbarExampleShorthandTeamsDark,
  ToolbarExampleShorthandTeamsHighContrast,
};
