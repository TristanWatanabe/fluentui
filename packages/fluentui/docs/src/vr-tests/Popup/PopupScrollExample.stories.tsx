import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Screener, { Steps } from 'screener-storybook/src/screener';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Popup, buttonClassName } from '@fluentui/react-northstar';
import PopupScrollExample from '../../examples/components/Popup/Visual/PopupScrollExample';

const selectors = {
  triggerButtonPopupWithTrapFocus: `.${buttonClassName}[title*="Show popup with focus"]`,
  triggerButtonControlledPopupWithFocus: `.${buttonClassName}[title*="Show controlled popup"]`,
  triggerButtonInlineControlledPopupWithFocus: `.${buttonClassName}[title*="Show controlled popup inline"]`,
};

export default {
  component: Popup,
  title: 'Popup',
  decorators: [
    story => (
      <Screener
        steps={new Steps()
          .focus(selectors.triggerButtonPopupWithTrapFocus)
          .snapshot('Scroll to trigger button for popup with trap focus')
          .click(selectors.triggerButtonPopupWithTrapFocus)
          .snapshot('Click on trigger button for popup with trap focus')
          // hide first popup
          .click('body')
          .focus(selectors.triggerButtonControlledPopupWithFocus)
          .snapshot('Scroll to trigger button for controlled popup with manual focus')
          .click(selectors.triggerButtonControlledPopupWithFocus)
          .snapshot('Click on trigger button for controlled popup with manual focus')
          // hide second popup
          .click('body')
          .focus(selectors.triggerButtonInlineControlledPopupWithFocus)
          .snapshot('Scroll to trigger button for inline controlled popup with manual focus')
          .click(selectors.triggerButtonInlineControlledPopupWithFocus)
          .snapshot('Click on trigger button for inline controlled popup with manual focus')
          .end()}
      >
        {story()}
      </Screener>
    ),
  ],
} as ComponentMeta<typeof Popup>;

export { PopupScrollExample };
