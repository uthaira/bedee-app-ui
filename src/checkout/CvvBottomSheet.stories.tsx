import { Meta, StoryObj } from '@storybook/react'
import CvvBottomSheet from './CvvBottomSheet'

export default {
  title: 'Checkout/CvvBottomSheet',
  component: CvvBottomSheet,
} as Meta<typeof CvvBottomSheet>

type CvvBottomSheetStory = StoryObj<typeof CvvBottomSheet>

export const CvvBottomSheetTemplete: CvvBottomSheetStory = {
  args: {
    isOpen: true,
    card: { number: 'XXXXXXXXXXX6788', expired: '202601' },
    isLoading: false,
    onConfirm: (cvv) => console.log('confirm, cvv length:', cvv.length),
    onUseNewCard: () => console.log('use new card'),
    onClose: () => console.log('close'),
  },
}

export const CvvBottomSheetEnglish: CvvBottomSheetStory = {
  args: {
    ...CvvBottomSheetTemplete.args,
    texts: {
      title: 'Saved Card',
      cardNumberLabel: 'Card No.',
      expiryLabel: 'Expiry date',
      cvvLabel: 'CVC/CVV',
      cvvPlaceholder: '3-4 digits',
      cvvHint: 'The 3- or 4-digit security code on your card',
      cvvError: 'Please enter CVV/CVC',
      confirmButton: 'Use the saved card',
      newCardButton: 'Use New card',
    },
  },
}
