import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Meta } from '@storybook/react'
import BottomSheet from '../../components/bottomsheet/BaseBottomSheet'
import { BdPrimaryButton } from '../../components'

export const SampleBottomSheet = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)

  const handleOpen = () => {
    setBottomSheetOpen(true)
  }

  const handleClose = () => {
    setBottomSheetOpen(false)
  }

  return (
    <div>
      <BdPrimaryButton bdSize="lg" text="Open Bottom Sheet" onClick={handleOpen} />
      <BottomSheet open={isBottomSheetOpen} onClose={handleClose}>
        <Typography variant="body1">This is the content of the bottom sheet.</Typography>
      </BottomSheet>
    </div>
  )
}

export default {
  title: 'Sample/BottomSheet',
  component: SampleBottomSheet,
} as Meta<typeof SampleBottomSheet>
