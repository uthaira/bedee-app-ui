import { Meta, StoryObj } from '@storybook/react'
import BottomSheet from './SwipeableBottomSheetV2'
import { P1 } from '../font'
import { useState } from 'react'

export default {
  title: 'Components/BottomSheet/SwipeableBottomSheetV2',
  component: BottomSheet,
} as Meta<typeof SwipeableBottomSheetV2>

type SwipeableBottomSheetV2Story = StoryObj<typeof BottomSheet>

let isOpen = true
const snapPoints = [1, 0.7, 0]
const initialSnap = 1

const onCloseDrawer = () => {
  isOpen = false
}

export const SwipeableBottomSheetV2: SwipeableBottomSheetV2Story = {
  args: {
    isOpen,
    snapPoints,
    initialSnap,
    onCloseDrawer,
    children: <P1 text="This is SwipeableBottomSheetV2 content" />,
  },
}
