import { Meta, StoryObj } from '@storybook/react'
import BottomSheet from './BaseBottomSheet'
import { P1 } from '../font'

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
} as Meta<typeof BottomSheet>

type BaseBottomSheetStory = StoryObj<typeof BottomSheet>

export const BaseBottomSheet: BaseBottomSheetStory = {
  args: {
    height: '50%',
    open: true,
    isCloseIcon: true,
    children: <P1 text="This is bottomSheet content" />,
  },
}
