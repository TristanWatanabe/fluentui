import * as React from 'react';
import { Steps, StoryWright } from 'storywright';
import { Button } from '@fluentui/react-button';
import { makeStyles } from '@griffel/react';
import { ComponentMeta } from '@storybook/react';

const steps = new Steps().click('#button-id').snapshot('button clicked').end();
const useStyles = makeStyles({ button: { backgroundColor: 'green' } });

export default {
  title: 'Component',
  Component: Button,
  decorators: [story => <StoryWright steps={steps}>{story()}</StoryWright>],
} as ComponentMeta<typeof Button>;

export const ExampleWithHook = () => {
  // ⚠️⚠️⚠️ this is not a component
  const styles = useStyles();
  return (
    <Button id={'button-id'} className={styles.button}>
      Foo
    </Button>
  );
};
