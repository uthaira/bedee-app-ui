import React from 'react'
import { Box, Slide as MuiSlide, IconButton, SlideProps as MuiSlideProps, styled } from '@mui/material'
import CloseIcon from '../../icons/CloseIcon'

export interface FullModalProps extends MuiSlideProps {
  open?: boolean
  onClose: () => void
  isCloseIcon?: boolean
  children: React.ReactElement
  hidePadding?: boolean
  closeIconStyle?: 'close' | 'close-circle'
}

const FullModal = (props: FullModalProps) => {
  const { open, onClose, isCloseIcon, children, hidePadding = false ,closeIconStyle = 'close' } = props

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
            p: hidePadding ? 0 : 2,
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
              {
              closeIconStyle === 'close' ? 
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>:
                <XCloseButtonStyled onClick={onClose}>
                  <CloseIcon />
                </XCloseButtonStyled>
              }
            </Box>
          )}
          <Box sx={{ mt: 2 }}>{children}</Box>
        </Box>
      </MuiSlide>
    </>
  )
}

export default FullModal

const XCloseButtonStyled = styled(IconButton)(() => ({
  position: "absolute",
  borderRadius: "50%",
  width: 32,
  height: 32,
  minWidth: 0,
  padding: 0,
  top: 16,
  right: 16,
  backgroundColor: "#EAEEF6",
  color: "#323A43",
  "&:hover": {
    backgroundColor: "rgba(234, 238, 246, 0.7)",
  },
}));
