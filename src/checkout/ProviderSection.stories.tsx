import { Meta, StoryObj } from '@storybook/react'
import ProviderSection from './ProviderSection'

export default {
  title: 'Checkout/ProviderSection',
  component: ProviderSection,
} as Meta<typeof ProviderSection>

type ProviderSectionStory = StoryObj<typeof ProviderSection>

export const ProviderSectionTemplete: ProviderSectionStory = {
  args: {
    title: "ปรึกษาออนไลน์",
    fullName: 'พญ. ปวีนา ทดสอบ',
    positionName: 'ปรึกษาครอบครัว',
    consultationTime: 20,
    netConsultationFee: 200,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/240807_IU_at_Estee_Lauder_Photo_Call.png/800px-240807_IU_at_Estee_Lauder_Photo_Call.png',
    unitMins: 'นาที',
    hideTitle: true,
  },
}
