import { Meta, StoryObj } from '@storybook/react'
import BottomSheet from './SwipeableBottomSheetV2'
import { P1, P2 } from '../font'

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
    children: 
      <div style={{ backgroundColor: 'aqua' }}>
        <P1 text="This is P1 SwipeableBottomSheetV2 content" />
        <P2 text="This is P2 SwipeableBottomSheetV2 content" />
      </div>
    ,
  },
}
