import React, { useRef, useEffect } from 'react'
import { Box, Slide as MuiSlide, IconButton, SlideProps as MuiSlideProps } from '@mui/material'
import CloseIcon from '../../icons/CloseIcon'

export interface BottomSheetProps extends MuiSlideProps {
  height?: string
  open?: boolean
  onClose: () => void
  isCloseIcon?: boolean
  children: React.ReactElement
}

const BottomSheet = (props: BottomSheetProps) => {
  const { height = '50%', open, onClose, isCloseIcon, children } = props
  const bottomSheetRef = useRef<HTMLDivElement>(null)

  // Close the bottom sheet when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose])

  return (
    <>
      {/* Custom Backdrop */}
      {open && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: (theme) => theme.zIndex.modal - 1,
          }}
          onClick={onClose}
        />
      )}

      <MuiSlide direction="up" in={open} mountOnEnter unmountOnExit {...props}>
        <Box
          ref={bottomSheetRef}
          sx={{
            borderRadius: '32px 32px 0px 0px',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: height,
            backgroundColor: 'background.paper',
            boxShadow: 24,
            p: 2,
            overflowY: 'auto',
            zIndex: (theme) => theme.zIndex.modal,
          }}
        >
          {isCloseIcon && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                pb: 1,
              }}
            >
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>{children}</Box>
        </Box>
      </MuiSlide>
    </>
  )
}

export default BottomSheet