import React from 'react'
import { Box, IconButton, Stack, styled } from '@mui/material'
import CameraViewPort from './CameraViewPort'
import CornerMark from './CornerMark'
import CameraFrameOverlay from './CameraFrameOverlay'
import TakePhotoIcon from './TakePhotoIcon'
import SecondaryBtn from '../button/SecondaryBtn'

enum EFacingMode {
  USER = 'user',
  ENVIRONMENT = 'environment',
}

interface CameraFrameProps {
  onFacingMode: (mode: EFacingMode) => void
  onCapture: () => void
  onGallery: () => void
  onToggleTorch?: () => void
  cameraViewPortHeight?: number
  viewportHeight?: number
  cameraOverlayFrame?: React.ReactNode
  captureInstruction?: React.ReactNode
  placementInstruction?: React.ReactNode
  textGallery: string
  isGallery: boolean
}

const CameraFrame: React.FC<CameraFrameProps> = ({
  onFacingMode,
  onCapture,
  onGallery,
  onToggleTorch,
  cameraViewPortHeight = 234,
  viewportHeight,
  cameraOverlayFrame,
  captureInstruction,
  placementInstruction,
  textGallery,
  isGallery,
}) => {
  return (
    <Container>
      <CameraFrameOverlay overlayPosition="top" cameraViewPortHeight={cameraViewPortHeight}>
        <CaptureInstruction>{captureInstruction}</CaptureInstruction>
      </CameraFrameOverlay>

      <CameraFrameOverlay overlayPosition="bottom" cameraViewPortHeight={cameraViewPortHeight}>
        <BottomSection>
          <Box marginBottom="40px">{placementInstruction}</Box>

          <Stack direction="row" justifyContent="center" width="100%">
            <Box flex={1} display="flex" />
            <Box flex={1} display="flex" justifyContent="center">
              <IconButton onClick={onCapture}>
                <TakePhotoIcon />
              </IconButton>
            </Box>
            {isGallery && (
              <Box flex={1} display={'flex'} alignItems={'center'}>
                <Box px={2}>
                  <SecondaryBtn text={textGallery} bdSize="md" onClick={onGallery} />
                </Box>
              </Box>
            )}
          </Stack>
        </BottomSection>
      </CameraFrameOverlay>

      <CameraFrameOverlay overlayPosition="left" cameraViewPortHeight={cameraViewPortHeight} />
      <CameraFrameOverlay overlayPosition="right" cameraViewPortHeight={cameraViewPortHeight} />

      <CornerMark rotation={0} position="top-left" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={90} position="top-right" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={-90} position="bottom-left" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={180} position="bottom-right" cameraViewPortHeight={cameraViewPortHeight} />

      <CameraViewPort viewPortHeight={cameraViewPortHeight}>{cameraOverlayFrame}</CameraViewPort>
    </Container>
  )
}

const Container = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
})

const CaptureInstruction = styled(Stack)(({ theme }) => ({
  justifyContent: 'flex-end',
  height: '100%',
  padding: theme.spacing(4, 3, 5, 3),
}))

const BottomSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
  padding: theme.spacing(3, 1),
}))

export default CameraFrame
