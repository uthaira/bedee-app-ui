import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StepList from './StepList';

const meta: Meta<typeof StepList> = {
  title: 'Components/StepList',
  component: StepList,
  argTypes: {
    steps: { control: 'array' },
    stepTextColor: { control: 'color' },
    stepCircleColor: { control: 'text' },
    stepConnectorColor: { control: 'color' },
  },
  args: {
    steps: [
      'เตรียมเอกสารบัตรประชาชน หรือพาสปอร์ตตัวจริงที่ยังไม่หมดอายุ',
      'ถ่ายรูปบัตรประชาชน หรือพาสปอร์ต ให้ชัดเจน ไม่มีวัสดุถูดบัง',
      'ตรวจสอบความชัดเจนของรูปถ่ายก่อนส่งข้อมูล',
    ],
    stepTextColor: '#3A4248',
    stepCircleColor: 'linear-gradient(180deg, #B8CAF6 0%, #E5EDFF 100%)',
    stepConnectorColor: '#EAEEF6',
    textColor: '#3A4248',
  },
};

export default meta;

type Story = StoryObj<typeof StepList>;

export const Default: Story = {};

export const CustomColors: Story = {
  args: {
    stepTextColor: '#FF0000',
    stepCircleColor: 'linear-gradient(180deg, #FFD700 0%, #FF8C00 100%)',
    stepConnectorColor: '#FF8C00',
    textColor: '#FF0000',
  },
};