import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Button } from '@fluentui/react-northstar';
import screenerSteps from './commonScreenerSteps';
import { getThemeStoryVariant } from '../utilities/getThemeStoryVariant';
import ButtonGroupCircularExampleShorthand from '../../examples/components/Button/Groups/ButtonGroupCircularExample.shorthand';

export default {
  component: Button,
  title: 'Button',
  decorators: [story => <Screener steps={screenerSteps}>{story()}</Screener>],
} as ComponentMeta<typeof Button>;

const ButtonGroupCircularExampleShorthandTeams = getThemeStoryVariant(ButtonGroupCircularExampleShorthand, 'teamsV2');

const ButtonGroupCircularExampleShorthandTeamsDark = getThemeStoryVariant(
  ButtonGroupCircularExampleShorthand,
  'teamsDarkV2',
);

const ButtonGroupCircularExampleShorthandTeamsHighContrast = getThemeStoryVariant(
  ButtonGroupCircularExampleShorthand,
  'teamsHighContrast',
);

export {
  ButtonGroupCircularExampleShorthand,
  ButtonGroupCircularExampleShorthandTeams,
  ButtonGroupCircularExampleShorthandTeamsDark,
  ButtonGroupCircularExampleShorthandTeamsHighContrast,
};
