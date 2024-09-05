import { Meta, StoryObj } from '@storybook/react'
import PaymentMethod, { EPaymentMethod } from './PaymentMethod'

export default {
  title: 'Checkout/PaymentMethod',
  component: PaymentMethod,
} as Meta<typeof PaymentMethod>

type PaymentMethodStory = StoryObj<typeof PaymentMethod>

export const PaymentMethodTemplete: PaymentMethodStory = {
  args: {
    title: "วิธีการชำระเงิน",
    onSelected: (paymentType) => {
      console.log(paymentType)
    },
    currentPaymentType: EPaymentMethod.creditCard,
    withAlert: true,
    alertText: 'กรุณาทำรายการต่อ เพื่อยืนยันการรับคำปรึกษาภายใน 10 นาที',
    allowPaymentOptions: [EPaymentMethod.promptpay,EPaymentMethod.creditCard],
    creditCardLabel: 'บัตรเครดิต / เดบิต',
    promptpayLabel: 'QR พร้อมเพย์',
    hideTitle: false,
  },
}
