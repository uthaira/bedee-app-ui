import { Meta, StoryObj } from '@storybook/react'
import PinForm from './PinForm'

export default {
  title: 'Components/PinForm',
  component: PinForm,
} as Meta<typeof PinForm>

type PinFormStory = StoryObj<typeof PinForm>

export const OtpFormTemplete: PinFormStory = {
  args: {
    codeList: ['1','2','3','4','5','6'],
    error: 'รหัสไม่ถูกต้อง',
  },
}
