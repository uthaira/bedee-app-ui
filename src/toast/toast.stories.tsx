import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { ToastProvider, useToast } from '.';
import { Meta } from '@storybook/react';

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
} as Meta<typeof ToastProvider>;

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
      <Button variant="contained" color="success" onClick={() => toast.success('Success Message with alignment top', {
        position: 'top-right',
        alignment: 'top',
      })}>
        Show Success Toast with alignment to top
      </Button>

      <Button variant="contained" color="success" onClick={() => toast.success('Success Message with not showing close button', {
        position: 'top-right',
        showCloseButton: false,
        alignment: 'top',
      })}>
        Show Success Toast with not showing close button
      </Button>

      <Button variant="contained" color="error" onClick={() => toast.error('Error Message with backdrop', {
        position: 'top-center',
        showCloseButton: true,
        alignment: 'center',
        showBackdrop: true,
      })}>
        Show Error Toast with Backdrop
      </Button>
    </Stack>
  );
};

const Template = () => <ToastButtons />;

export const Default = Template.bind({});