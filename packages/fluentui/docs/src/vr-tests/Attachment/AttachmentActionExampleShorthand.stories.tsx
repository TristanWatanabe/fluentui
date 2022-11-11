import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Attachment } from '@fluentui/react-northstar';
import { CloseIcon, MoreIcon } from '@fluentui/react-icons-northstar';
import screenerSteps from './commonScreenerSteps';
import { getThemeStoryVariant } from '../utilities/getThemeStoryVariant';

const handleClick = action => () => alert(`'${action}' was clicked`);

const AttachmentActionExampleShorthand = () => (
  <div>
    <Attachment
      header="Picture.jpg"
      actionable
      action={{ icon: <CloseIcon />, onClick: handleClick('Remove'), title: 'Close' }}
    />
    <Attachment
      header="Document.docx"
      actionable
      action={{ icon: <MoreIcon />, onClick: handleClick('Show more'), title: 'Show more' }}
    />
  </div>
);

export default {
  component: Attachment,
  title: 'Attachment',
  decorators: [story => <Screener steps={screenerSteps}>{story()}</Screener>],
} as ComponentMeta<typeof Attachment>;

const AttachmentActionExampleShorthandTeams = getThemeStoryVariant(AttachmentActionExampleShorthand, 'teamsV2');

const AttachmentActionExampleShorthandTeamsDark = getThemeStoryVariant(AttachmentActionExampleShorthand, 'teamsDarkV2');

const AttachmentActionExampleShorthandTeamsHighContrast = getThemeStoryVariant(
  AttachmentActionExampleShorthand,
  'teamsHighContrast',
);

export {
  AttachmentActionExampleShorthand,
  AttachmentActionExampleShorthandTeams,
  AttachmentActionExampleShorthandTeamsDark,
  AttachmentActionExampleShorthandTeamsHighContrast,
};
