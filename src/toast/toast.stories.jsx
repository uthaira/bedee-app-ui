import { Button, Stack } from '@mui/material';

import { ToastProvider, useToast } from '../toast';

export default {
  title: 'Toast',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider
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
      <Button variant="contained" color="error" onClick={() => toast.error('Error Message', {
        position: 'bottom-right',
      })}>
        Show Error Toast
      </Button>
      <Button variant="contained" color="info" onClick={() => toast.info('Info Message', {
        position: 'bottom-left',
      })}>
        Show Info Toast
      </Button>
      <Button variant="contained" color="warning" onClick={() => toast.warn('Warning Message', {
        position: 'top-right',
      })}>
        Show Warning Toast
      </Button>
      <Button variant="contained" color="success" onClick={() => toast.success('Success Message with not showing close button', {
        position: 'top-right',
        showCloseButton: false,
      })}>
        Show Success Toast with not showing close button
      </Button>
    </Stack>
  );
};

const Template = () => <ToastButtons />;

export const Default = Template.bind({});
Default.args = {};
