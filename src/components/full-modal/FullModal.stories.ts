import { Meta, StoryObj } from '@storybook/react'
import FullModal from './FullModal'

export default {
  title: 'Components/FullModal',
  component: FullModal,
} as Meta<typeof FullModal>

type FullModalStory = StoryObj<typeof FullModal>

export const FullModalStory: FullModalStory = {
  args: {
    open: true,
    isCloseIcon: true,
    closeIconStyle: 'close-circle',
    hidePadding: false,
  },
}
