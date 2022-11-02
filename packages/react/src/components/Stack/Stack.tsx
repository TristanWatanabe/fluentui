/** @jsxRuntime classic */
/** @jsx withSlots */
import * as React from 'react';
import { withSlots, createComponent, getSlots } from '@fluentui/foundation-legacy';
import { css, getNativeProps, htmlElementProperties, warnDeprecations } from '../../Utilities';
import { styles, GlobalClassNames as StackGlobalClassNames } from './Stack.styles';
import { StackItem } from './StackItem/StackItem';
import type { IStackComponent, IStackProps, IStackSlots } from './Stack.types';
import type { IStackItemProps } from './StackItem/StackItem.types';

const StackView: IStackComponent['view'] = props => {
  const { as: RootType = 'div', disableShrink = false, enableScopedSelectors = false, wrap, ...rest } = props;

  warnDeprecations('Stack', props, {
    gap: 'tokens.childrenGap',
    maxHeight: 'tokens.maxHeight',
    maxWidth: 'tokens.maxWidth',
    padding: 'tokens.padding',
  });

  const stackChildren = _processStackChildren(props.children, { disableShrink, enableScopedSelectors });

  const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(rest, htmlElementProperties);

  const Slots = getSlots<IStackProps, IStackSlots>(props, {
    root: RootType,
    inner: 'div',
  });

  if (wrap) {
    return (
      <Slots.root {...nativeProps}>
        <Slots.inner>{stackChildren}</Slots.inner>
      </Slots.root>
    );
  }

  return <Slots.root {...nativeProps}>{stackChildren}</Slots.root>;
};

function _processStackChildren(
  children: React.ReactNode,
  { disableShrink, enableScopedSelectors }: { disableShrink: boolean; enableScopedSelectors: boolean },
): (React.ReactChild | React.ReactFragment | React.ReactPortal)[] {
  let childrenArray = React.Children.toArray(children);

  childrenArray = React.Children.map(childrenArray, child => {
    if (!child || !React.isValidElement(child)) {
      return null;
    }

    if (child.type === React.Fragment) {
      return child.props.children
        ? _processStackChildren(child.props.children, { disableShrink, enableScopedSelectors })
        : null;
    }

    const childAsReactElement = child as React.ReactElement;

    let defaultItemProps: IStackItemProps = {};
    if (_isStackItem(child)) {
      defaultItemProps = { shrink: !disableShrink };
    }

    return React.cloneElement(childAsReactElement, {
      ...defaultItemProps,
      ...childAsReactElement.props,
      className: enableScopedSelectors
        ? css(StackGlobalClassNames.child, childAsReactElement.props.className)
        : childAsReactElement.props.className,
    });
  });

  return childrenArray;
}

function _isStackItem(item: React.ReactNode): item is typeof StackItem {
  // In theory, we should be able to just check item.type === StackItem.
  // However, under certain unclear circumstances (see https://github.com/microsoft/fluentui/issues/10785),
  // the object identity is different despite the function implementation being the same.
  return (
    !!item &&
    typeof item === 'object' &&
    !!(item as React.ReactElement).type &&
    // StackItem is generated by createComponent, so we need to check its displayName instead of name
    ((item as React.ReactElement).type as React.ComponentType).displayName === StackItem.displayName
  );
}

const StackStatics = {
  Item: StackItem,
};

export const Stack: React.FunctionComponent<IStackProps> & {
  Item: React.FunctionComponent<IStackItemProps>;
} = createComponent(StackView, {
  displayName: 'Stack',
  styles,
  statics: StackStatics,
});

export default Stack;
