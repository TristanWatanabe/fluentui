import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Toolbar } from '@fluentui/react-northstar';
import { getThemeStoryVariant, keys } from '../utilities';
import ToolbarExampleEditorShorthand from '../../examples/components/Toolbar/Types/ToolbarExampleEditor.shorthand';

export default {
  component: Toolbar,
  title: 'Toolbar',
  decorators: [
    story => (
      <StoryWright steps={new Steps().keys('body', keys.tab).snapshot('Focuses item').end()}>{story()}</StoryWright>
    ),
  ],
} as ComponentMeta<typeof Toolbar>;

const ToolbarExampleEditorShorthandTeams = getThemeStoryVariant(ToolbarExampleEditorShorthand, 'teamsV2');

const ToolbarExampleEditorShorthandTeamsDark = getThemeStoryVariant(ToolbarExampleEditorShorthand, 'teamsDarkV2');

const ToolbarExampleEditorShorthandTeamsHighContrast = getThemeStoryVariant(
  ToolbarExampleEditorShorthand,
  'teamsHighContrast',
);

export {
  ToolbarExampleEditorShorthand,
  ToolbarExampleEditorShorthandTeams,
  ToolbarExampleEditorShorthandTeamsDark,
  ToolbarExampleEditorShorthandTeamsHighContrast,
};
