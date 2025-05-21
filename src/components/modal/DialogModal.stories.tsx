import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DialogModal from './DialogModal';
import { Button } from '@mui/material';

const meta: Meta<typeof DialogModal> = {
  title: 'Components/DialogModal',
  component: DialogModal,
  argTypes: {
    hasCancelButton: { control: 'boolean' },
    options: {
      control: 'object',
      defaultValue: [
        { id: '1', title: 'Option 1' },
        { id: '2', title: 'Option 2' },
        { id: '3', title: 'Option 3' },
      ],
    },
    onClose: { action: 'closed' },
    onSelectOption: { action: 'option selected' },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DialogModal>;

const DialogWithButton: React.FC<any> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog Modal
      </Button>
      <DialogModal {...args} open={open} onClose={handleClose} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogWithButton {...args} />,
  args: {
    options: [
      { id: '1', title: 'Option 1' },
      { id: '2', title: 'Option 2' },
      { id: '3', title: 'Option 3' },
    ]
  },
};

export const WithCancelButton: Story = {
  render: (args) => <DialogWithButton {...args} />,
  args: {
    hasCancelButton: true,
    options: [
      { id: '1', title: 'Option 1' },
      { id: '2', title: 'Option 2' },
      { id: '3', title: 'Option 3' },
    ]
  },
};