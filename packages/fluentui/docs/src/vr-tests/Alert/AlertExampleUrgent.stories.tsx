import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Alert } from '@fluentui/react-northstar';
import { getFocusScreenerSteps, getHoverScreenerSteps } from './commonScreenerSteps';
import { getThemeStoryVariant } from '../utilities/getThemeStoryVariant';
import AlertExampleUrgent from '../../examples/components/Alert/Variations/AlertExampleUrgent.shorthand';

export default {
  component: Alert,
  title: 'Alert',
  decorators: [
    story => <Screener steps={getFocusScreenerSteps}>{story()}</Screener>,
    story => <Screener steps={getHoverScreenerSteps}>{story()}</Screener>,
  ],
} as ComponentMeta<typeof Alert>;

const AlertExampleUrgentTeams = getThemeStoryVariant(AlertExampleUrgent, 'teamsV2');

const AlertExampleUrgentTeamsDark = getThemeStoryVariant(AlertExampleUrgent, 'teamsDarkV2');

const AlertExampleUrgentTeamsHighContrast = getThemeStoryVariant(AlertExampleUrgent, 'teamsHighContrast');

export {
  AlertExampleUrgent,
  AlertExampleUrgentTeams,
  AlertExampleUrgentTeamsDark,
  AlertExampleUrgentTeamsHighContrast,
};
