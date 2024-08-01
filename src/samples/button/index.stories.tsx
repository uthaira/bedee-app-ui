import React from 'react';
import { Meta } from '@storybook/react';
import { BdButton } from '../../components/button';

export default {
  title: 'Samples/Button',
  component: BdButton,
} as Meta;

const Template = (args: any) => <BdButton {...args} />;

export const Default = Template.bind({});