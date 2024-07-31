import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../../components/button';

export default {
  title: 'Samples/Button',
  component: Button,
} as Meta;

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({});