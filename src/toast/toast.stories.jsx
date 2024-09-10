import React from 'react';
import { Button, Stack } from '@mui/material';

import { ToastProvider, useToast } from '../toast';

const NoTransition = React.forwardRef(function NoTransition(props, ref) {
  return <div ref={ref} {...props} />;
});

export default {
  title: 'Toast',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider
        transitionComponent={NoTransition}
        position='top-center'
      >
        <div style={{ minHeight: '100vh' }}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ]
};

const ToastButtons = () => {
  const toast = useToast();

  return (
    <Stack spacing={2} direction="column">
      <Button variant="contained" color="success" onClick={() => toast.success('Success Message')}>
        Show Success Toast
      </Button>
      <Button variant="contained" color="error" onClick={() => toast.error('Error Message')}>
        Show Error Toast
      </Button>
      <Button variant="contained" color="info" onClick={() => toast.info('Info Message')}>
        Show Info Toast
      </Button>
      <Button variant="contained" color="warning" onClick={() => toast.warn('Warning Message')}>
        Show Warning Toast
      </Button>
    </Stack>
  );
};

const Template = () => <ToastButtons />;

export const Default = Template.bind({});
Default.args = {};
