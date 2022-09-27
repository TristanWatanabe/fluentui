import * as React from 'react';
// import Screener, { Steps } from 'screener-storybook/src/screener';
// import { storiesOf } from '@storybook/react';
import { Input, InputProps } from '@fluentui/react-input';
import {
  FluentProvider,
  webLightTheme,
  Menu,
  MenuList,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  Button,
} from '@fluentui/react-components';
import { within, userEvent } from '@storybook/testing-library';

export default {
  component: Input,
  decorators: [
    Story => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

const MenuTemplate = args => (
  <FluentProvider theme={webLightTheme}>
    <Menu>
      <MenuTrigger>
        <button>Toggle menu</button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem id="test-hover">Cut</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </FluentProvider>
);

export const MenuClosed = {
  render: MenuTemplate,
};

export const MenuClickedAndOpened = {
  render: MenuTemplate,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};

export const MenuHover = {
  render: MenuTemplate,
  parameters: {
    pseudo: { hover: ['#test-hover'] },
  },
};

export const MenuListHover = {
  render: args => (
    <FluentProvider theme={webLightTheme}>
      <MenuList>
        <MenuItem id="one">Cut</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </FluentProvider>
  ),
  parameters: {
    pseudo: { hover: ['#one'] },
  },
};

const ButtonTemplate = () => (
  <FluentProvider theme={webLightTheme}>
    <Button>Button</Button>
  </FluentProvider>
);

export const ButtonDefault = {
  render: ButtonTemplate,
};

export const ButtonDefaultHover = {
  render: ButtonTemplate,
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = await canvas.getByRole('button');
  //   console.log(button);
  //   await userEvent.click(button);
  // },
  parameters: {
    pseudo: { hover: true },
  },
};

const InputTemplate = (args: InputProps) => (
  <FluentProvider theme={webLightTheme}>
    <Input {...args} placeholder="Placeholder" />
  </FluentProvider>
);

export const OutlineInputWithValue = {
  render: InputTemplate,
  args: {
    appearance: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole('textbox');
    console.log('input ', input);
    await userEvent.type(input, 'Hello World');
  },
};
