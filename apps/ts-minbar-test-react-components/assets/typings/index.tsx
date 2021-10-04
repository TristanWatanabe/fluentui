import { Button, FluentProvider } from '@fluentui/react-components';
import * as React from 'react';

const App = () => (
  <FluentProvider>
    <Button children={{ text: 'Hello World' }} />
  </FluentProvider>
);

export default App;
