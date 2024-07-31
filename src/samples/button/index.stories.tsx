import React from 'react';
import { Meta } from '@storybook/react';
import { BedeeButton } from '../../components/button';

export default {
  title: 'Samples/Button',
  component: BedeeButton,
} as Meta;

const Template = (args: any) => <BedeeButton {...args} />;

export const Default = Template.bind({});