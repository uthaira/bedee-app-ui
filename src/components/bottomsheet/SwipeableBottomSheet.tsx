import React from 'react'
import { Global } from '@emotion/react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { CloseIcon } from '../../icons'
import { Colors } from '../../colors'
import { grey } from '@mui/material/colors'

interface SwipeableBottomSheetProps {
  isOpen: boolean
  configHeight?: string
  drawerBleeding?: number
  onOpenDrawer: () => void
  onCloseDrawer: () => void
  children: React.ReactNode
}

const ConfigHeight = '90%'
const DrawerBleeding = 56

const SwipeableBottomSheet = (props: SwipeableBottomSheetProps) => {
  const {
    children,
    isOpen,
    configHeight = ConfigHeight,
    drawerBleeding = DrawerBleeding,
    onOpenDrawer,
    onCloseDrawer,
  } = props

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(${configHeight} - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onOpen={onOpenDrawer}
        onClose={onCloseDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          },
        }}
      >
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 2,
            height: '100%',
            overflow: 'auto',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: 12,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
          </StyledBox>
          <Box
            sx={{
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
          >
            <IconButton onClick={onCloseDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </StyledBox>
      </SwipeableDrawer>
    </>
  )
}

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: Colors.white,
  ...theme.applyStyles('dark', {
    backgroundColor: grey[800],
  }),
}))

const Puller = styled('div')(({ theme }) => ({
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  width: '60px',
  left: 'calc(50% - 30px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}))

export default SwipeableBottomSheet
