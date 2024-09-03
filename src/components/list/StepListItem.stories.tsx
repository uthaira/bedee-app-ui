import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StepItem from './StepListItem';

const meta: Meta<typeof StepItem> = {
  title: 'Components/StepItem',
  component: StepItem,
  argTypes: {
    number: { control: 'number' },
    text: { control: 'text' },
    stepTextColor: { control: 'text' },
    stepCircleColor: { control: 'text' },
    stepConnectorColor: { control: 'text' },
    textColor: { control: 'text' },
  },
  args: {
    number: 1,
    text: 'เตรียมเอกสารบัตรประชาชน หรือพาสปอร์ตตัวจริงที่ยังไม่หมดอายุ',
    stepTextColor: '#3A4248',
    stepCircleColor: 'linear-gradient(180deg, #B8CAF6 0%, #E5EDFF 100%)',
    stepConnectorColor: '#EAEEF6',
    textColor: '#3A4248',
  },
};

export default meta;

type Story = StoryObj<typeof StepItem>;

export const Default: Story = {
  args: {
    number: 1,
    text: 'เตรียมเอกสารบัตรประชาชน หรือพาสปอร์ตตัวจริงที่ยังไม่หมดอายุ',
  },
};

export const CustomColor: Story = {
  args: {
    number: 2,
    text: 'ถ่ายรูปบัตรประชาชน หรือพาสปอร์ต ให้ชัดเจน ไม่มีวัสดุถูดบัง',
    stepTextColor: '#3A4248',
    stepCircleColor: 'linear-gradient(180deg, #FFD700 0%, #FF8C00 100%)',
    stepConnectorColor: '#FFA500',
  },
};