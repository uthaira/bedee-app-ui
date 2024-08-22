import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';

export default {
  title: 'Components/Textarea',
  component: TextArea,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    borderColor: { control: 'color' },
    borderActiveColor: { control: 'color' },
    fontSize: { control: 'text' },
    borderRadius: { control: 'text' },
    placeholderColor: { control: 'color' },
    rows: { control: 'number' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    sx: { control: 'object' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text...',
    maxLength: 50,
    borderColor: '#cccccc',
    fontSize: '14px',
    borderRadius: '8px',
    placeholderColor: '#aaaaaa',
    rows: 3,
    helperText: '',
    error: false,
    disabled: false,
  },
  render: (args) => {
    const [text, setText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} value={text} onChange={handleChange} />
      </div>
    );
  },
};

export const WithoutMaxLength: Story = {
  args: {
    ...Default.args,
    maxLength: undefined,
  },
  render: (args) => {
    const [text, setText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} value={text} onChange={handleChange} />
      </div>
    );
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'This is a helper text.',
  },
  render: (args) => {
    const [text, setText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} value={text} onChange={handleChange} />
      </div>
    );
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    helperText: 'This is an error state.',
    error: true,
  },
  render: (args) => {
    const [text, setText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} value={text} onChange={handleChange} />
      </div>
    );
  },
};

export const MaxLengthExceeded: Story = {
  args: {
    ...Default.args,
    value: 'This text exceeds the maximum length allowed.',
    maxLength: 45,
  },
  render: (args) => {
    const [text, setText] = React.useState('This text exceeds the maximum length allowed.');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} value={text} onChange={handleChange} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => {
    return (
      <div style={{ width: '300px' }}>
        <TextArea {...args} />
      </div>
    );
  },
};