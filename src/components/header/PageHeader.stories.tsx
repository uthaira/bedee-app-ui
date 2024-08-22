import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {
    title: { control: 'text' },
    elevated: { control: 'boolean' },
    fixed: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const NoShadowWithoutBack: Story = {
  args: {
    title: 'Page Title',
    elevated: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const NoShadowWithBack: Story = {
  args: {
    title: 'Page Title',
    elevated: false,
    onBack: () => alert('Back button clicked'),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithShadowWithoutBack: Story = {
  args: {
    title: 'Page Title',
    elevated: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithShadowWithBack: Story = {
  args: {
    title: 'Page Title',
    elevated: true,
    onBack: () => alert('Back button clicked'),
  },
  parameters: {
    layout: 'fullscreen',
  },
};