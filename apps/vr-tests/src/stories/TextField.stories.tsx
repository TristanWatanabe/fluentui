import * as React from 'react';
import Screener from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { TextField } from '@fluentui/react';

storiesOf('TextField', module)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default')
        .click('.ms-TextField-field')
        .snapshot('click')
        .end()}
    >
      {story()}
    </Screener>
  ))
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />)
  .add('Placeholder', () => <TextField label="Standard" placeholder="Placeholder" />);

// export default {
//   component: Input,
// };

// export const Outline = () => (
//   <FluentProvider theme={webLightTheme}>
//     <Input appearance="outline" placeholder="Placeholder" />
//   </FluentProvider>
// );

// export default {
//   component: TextField,
// };

// export const TextFieldDefault = () => {};
