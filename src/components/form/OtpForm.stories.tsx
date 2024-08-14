import { Meta, StoryObj } from '@storybook/react'
import OtpForm from './OtpForm'

export default {
  title: 'Components/OtpForm',
  component: OtpForm,
} as Meta<typeof OtpForm>

type OtpFormStory = StoryObj<typeof OtpForm>

export const OtpFormTemplete: OtpFormStory = {
  args: {
    length: 4,
    value: '9999',
    refcode: 'AC12',
    refcodeLabel: 'รหัสอ้างอิง',
    resendTimeSecond: 180,
    expireTimeSecond: 180,
  },
}
