import { Meta, StoryObj } from '@storybook/react'
import { EPaymentMethod } from './PaymentMethod'
import ProviderSection from './ProviderSection'

export default {
  title: 'Checkout/ProviderSection',
  component: ProviderSection,
} as Meta<typeof ProviderSection>

type ProviderSectionStory = StoryObj<typeof ProviderSection>

export const ProviderSectionTemplete: ProviderSectionStory = {
  args: {
    title: "ปรึกษาออนไลน์",
    fullName: 'นพ. อภิสรรค์ จินานุวัฒนา',
    positionName: 'ปรึกษาครอบครัว',
    consultationTime: 20,
    netConsultationFee: 200,
    photo: 'https://dev-api.bdms.tech/doctor-profile/public/file/photo/b4a3e070-5726-4253-8857-ef33448f20b4',
    unitMins: 'นาที',
    hideTitle: true,
  },
}
