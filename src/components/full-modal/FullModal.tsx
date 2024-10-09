import React from 'react'
import { Box, Slide as MuiSlide, IconButton, SlideProps as MuiSlideProps } from '@mui/material'
import CloseIcon from '../../icons/CloseIcon'

export interface FullModalProps extends MuiSlideProps {
  open?: boolean
  onClose: () => void
  isCloseIcon?: boolean
  children: React.ReactElement
}

const FullModal = (props: FullModalProps) => {
  const { open, onClose, isCloseIcon, children } = props

  return (
    <>
      <MuiSlide direction="up" in={open} mountOnEnter unmountOnExit {...props}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
                position: "absolute",
                top: "16px",
                right: "16px",
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

export default FullModal
