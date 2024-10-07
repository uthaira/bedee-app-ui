import React, { useRef } from 'react'
import { Sheet, SheetRef } from 'react-modal-sheet'
import { Box, IconButton, styled } from '@mui/material'

import { Colors } from '../../colors'
import { CloseIcon } from '../../icons'

interface SwipeableBottomSheetV2Props {
  children: React.ReactNode
  isOpen: boolean
  isCloseButton?: boolean
  snapPoints?: number[]
  initialSnap?: number
  onCloseDrawer: () => void
  onSnap?: (snapIndex: number) => void
}

const SwipeableBottomSheetV2 = (props: SwipeableBottomSheetV2Props) => {
  const { children, isOpen, snapPoints, initialSnap, isCloseButton = true, onCloseDrawer, onSnap } = props

  const ref = useRef<SheetRef>()

  return (
    <Sheet
      isOpen={isOpen}
      ref={ref}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      onClose={onCloseDrawer}
      onSnap={onSnap}
    >
      <Sheet.Container>
        <SheetHeaderStyled>
          <StyledBox>
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
            {isCloseButton ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 999999,
                  backgroundColor: Colors.gray2,
                  borderRadius: '50%',
                }}
              >
                <IconButton onClick={onCloseDrawer}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : null}
          </StyledBox>
        </SheetHeaderStyled>
        <Sheet.Content style={{ paddingBottom: ref.current?.y }}>
          <Sheet.Scroller style={{ marginLeft: '16px', marginRight: '16px' }}>{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onCloseDrawer} />
    </Sheet>
  )
}

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: Colors.white,
}))

const Puller = styled('div')(({ theme }) => ({
  height: 6,
  backgroundColor: Colors.gray3,
  borderRadius: 3,
  position: 'absolute',
  width: '60px',
  left: 'calc(50% - 30px)',
}))

const SheetHeaderStyled = styled(Sheet.Header)(({ theme }) => ({
  padding: '16px 0px',
  zIndex: 9999,
}))

export default SwipeableBottomSheetV2
