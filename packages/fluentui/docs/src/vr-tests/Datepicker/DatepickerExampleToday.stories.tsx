import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener, { Steps } from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Datepicker, buttonClassName } from '@fluentui/react-northstar';
import { datepickerCalendarCellSelector } from './utils';
import { getThemeStoryVariant } from '../utilities';
import DatepickerExampleToday from '../../examples/components/Datepicker/States/DatepickerExampleToday.shorthand';

export default {
  component: Datepicker,
  title: 'Datepicker',
  decorators: [
    story => (
      <Screener
        steps={new Steps()
          .click(`.${buttonClassName}`)
          .snapshot('Shows datepicker popup through button.')
          .click(datepickerCalendarCellSelector(15))
          .snapshot('Shows selected date in input.')
          .click(`.${buttonClassName}`)
          .snapshot('Shows selected date in calendar.')
          .hover(datepickerCalendarCellSelector(22))
          .snapshot('Shows calendar with hover.')
          .end()}
      >
        {story()}
      </Screener>
    ),
  ],
} as ComponentMeta<typeof Datepicker>;

const DatepickerExampleTodayTeams = getThemeStoryVariant(DatepickerExampleToday, 'teamsV2');

const DatepickerExampleTodayTeamsDark = getThemeStoryVariant(DatepickerExampleToday, 'teamsDarkV2');

const DatepickerExampleTodayTeamsHighContrast = getThemeStoryVariant(DatepickerExampleToday, 'teamsHighContrast');

export {
  DatepickerExampleToday,
  DatepickerExampleTodayTeams,
  DatepickerExampleTodayTeamsDark,
  DatepickerExampleTodayTeamsHighContrast,
};
