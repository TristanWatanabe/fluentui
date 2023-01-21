import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TreeItemState, TreeItemSlots, TreeItemContextValues } from './TreeItem.types';
import { TreeItemProvider } from '../../contexts/treeItemContext';

/**
 * Render the final JSX of TreeItem
 */
export const renderTreeItem_unstable = (state: TreeItemState, contextValues: TreeItemContextValues) => {
  const { slots, slotProps } = getSlots<TreeItemSlots>(state);

  return (
    <TreeItemProvider value={contextValues.treeItem}>
      <slots.root {...slotProps.root}>
        <slots.content {...slotProps.content}>
          {slots.expandIcon && <slots.expandIcon {...slotProps.expandIcon} />}
          {slotProps.content.children}
          {slots.actions && <slots.actions {...slotProps.actions} />}
        </slots.content>
        {slots.subtree && <slots.subtree {...slotProps.subtree} />}
      </slots.root>
    </TreeItemProvider>
  );
};
