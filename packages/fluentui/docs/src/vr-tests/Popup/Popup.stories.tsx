// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Popup } from '@fluentui/react-northstar';
import PopupControlledExample from '../../examples/components/Popup/Types/PopupControlledExample';
import PopupCustomTargetExample from '../../examples/components/Popup/Types/PopupCustomTargetExample';
import PopupExample from '../../examples/components/Popup/Types/PopupExample';
import PopupExampleInline from '../../examples/components/Popup/Types/PopupExampleInline.shorthand';
import PopupExamplePointing from '../../examples/components/Popup/Types/PopupExamplePointing.shorthand';
import PopupFocusTrapExample from '../../examples/components/Popup/Types/PopupFocusTrapExample.shorthand';
import PopupExampleAsync from '../../examples/components/Popup/Usage/PopupExampleAsync.shorthand';
import PopupCloseButtonExample from '../../examples/components/Popup/Usage/PopupExampleCloseButton';
import PopupContextOnElement from '../../examples/components/Popup/Usage/PopupExampleContextOnElement';
import PopupExampleNested from '../../examples/components/Popup/Usage/PopupExampleNested.shorthand';
import PopupExampleOn from '../../examples/components/Popup/Usage/PopupExampleOn.shorthand';
import PopupExampleOnMultiple from '../../examples/components/Popup/Usage/PopupExampleOnMultiple.shorthand';
import PopupExampleOnWithFocusTrap from '../../examples/components/Popup/Usage/PopupExampleOnWithFocusTrap.shorthand';
import PopupExampleAutoSize from '../../examples/components/Popup/Variations/PopupExampleAutoSize.shorthand';
import PopupExamplePosition from '../../examples/components/Popup/Variations/PopupExamplePosition.shorthand';
import PopupExampleContainerTransformed from '../../examples/components/Popup/Visual/PopupExampleContainerTransformed';
import PopupExamplePointerMargin from '../../examples/components/Popup/Visual/PopupExamplePointerMargin.shorthand';
import PopupExamplePointerOffset from '../../examples/components/Popup/Visual/PopupExamplePointerOffset';

export default { component: Popup, title: 'Popup' } as ComponentMeta<typeof Popup>;

export {
  PopupControlledExample,
  PopupCustomTargetExample,
  PopupExample,
  PopupExampleInline,
  PopupExamplePointing,
  PopupFocusTrapExample,
  PopupExampleAsync,
  PopupCloseButtonExample,
  PopupContextOnElement,
  PopupExampleNested,
  PopupExampleOn,
  PopupExampleOnMultiple,
  PopupExampleOnWithFocusTrap,
  PopupExampleAutoSize,
  PopupExamplePosition,
  PopupExampleContainerTransformed,
  PopupExamplePointerMargin,
  PopupExamplePointerOffset,
};
