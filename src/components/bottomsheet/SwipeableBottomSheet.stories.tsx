import { Meta, StoryObj } from '@storybook/react'
import BottomSheet from './SwipeableBottomSheet'
import { P1 } from '../font'
import { useState } from 'react'

export default {
  title: 'Components/BottomSheet/SwipeableBottomSheet',
  component: BottomSheet,
} as Meta<typeof SwipeableBottomSheet>

type SwipeableBottomSheetStory = StoryObj<typeof BottomSheet>

let isOpen = true

const onOpenDrawer = () => {
  isOpen = true
}
const onCloseDrawer = () => {
  isOpen = false
}

export const SwipeableBottomSheet: SwipeableBottomSheetStory = {
  args: {
    isOpen,
    onOpenDrawer,
    onCloseDrawer,
    children: <P1 text="This is SwipeableBottomSheet content" />,
  },
}
