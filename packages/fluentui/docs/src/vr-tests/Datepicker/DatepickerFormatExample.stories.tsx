import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener, { Steps } from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Datepicker, inputClassName } from '@fluentui/react-northstar';
import { datepickerCalendarCellSelector } from './utils';
import { getThemeStoryVariant } from '../utilities';
import DatepickerFormatExample from '../../examples/components/Datepicker/Usage/DatepickerFormatExample.shorthand';

export default {
  component: Datepicker,
  title: 'Datepicker',
  decorators: [
    story => (
      <Screener
        steps={new Steps()
          .click(`.${inputClassName}`)
          .snapshot('Shows datepicker popup')
          .click(datepickerCalendarCellSelector(20))
          .snapshot('Shows selected date')
          .end()}
      >
        {story()}
      </Screener>
    ),
  ],
} as ComponentMeta<typeof Datepicker>;

const DatepickerFormatExampleTeams = getThemeStoryVariant(DatepickerFormatExample, 'teamsV2');

const DatepickerFormatExampleTeamsDark = getThemeStoryVariant(DatepickerFormatExample, 'teamsDarkV2');

const DatepickerFormatExampleTeamsHighContrast = getThemeStoryVariant(DatepickerFormatExample, 'teamsHighContrast');

export {
  DatepickerFormatExample,
  DatepickerFormatExampleTeams,
  DatepickerFormatExampleTeamsDark,
  DatepickerFormatExampleTeamsHighContrast,
};
