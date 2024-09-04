import { Meta, StoryObj } from '@storybook/react';
import KycCamera from './KycCamera';
import IdCardFrame from './IdCardFrame';
import PassportFrame from './PassportFrame';

const meta: Meta<typeof KycCamera> = {
  title: 'Components/KycCamera',
  component: KycCamera,
};

export default meta;

type Story = StoryObj<typeof KycCamera>;

export const IdCardKYC: Story = {
  args: {
    onTakePhoto: (photo: string) => {
      console.log('Photo taken: ', photo);
    },
    content: {
      captureInstruction: 'ถ่ายรูปหน้า\nบัตรประชาชน',
      placementInstruction: 'วางบัตรประชาชนของคุณในกรอบ\nโดยถ่ายให้เห็นข้อมูลชัดเจน ไม่เบลอ',
      cameraOverlayFrame: <IdCardFrame />,
    },
  },
};

export const PassportKYC: Story = {
  args: {
    onTakePhoto: (photo: string) => {
      console.log('Custom Photo taken: ', photo);
    },
    content: {
      captureInstruction: 'ถ่ายรูปหน้าพาสปอร์ต',
      placementInstruction: 'วางพาสปอร์ตในกรอบ\nโดยถ่ายให้เห็นข้อมูลชัดเจน ไม่เบลอ',
      cameraOverlayFrame: <PassportFrame />,
    },
  },
};