import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Button } from '@fluentui/react-northstar';
import screenerSteps from './commonScreenerSteps';
import { getThemeStoryVariant } from '../utilities/getThemeStoryVariant';
import ButtonGroupExampleShorthand from '../../examples/components/Button/Groups/ButtonGroupExample.shorthand';

export default {
  component: Button,
  title: 'Button',
  decorators: [story => <Screener steps={screenerSteps}>{story()}</Screener>],
} as ComponentMeta<typeof Button>;

const ButtonTeams = getThemeStoryVariant(Button, 'teamsV2');

const ButtonTeamsDark = getThemeStoryVariant(Button, 'teamsDarkV2');

const ButtonTeamsHighContrast = getThemeStoryVariant(Button, 'teamsHighContrast');

export { ButtonTeams, ButtonTeamsDark, ButtonTeamsHighContrast, ButtonGroupExampleShorthand };
