import React from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
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
              <Box flex={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box>
                  <SecondaryBtn text={textGallery} bdSize="sm" onClick={onGallery} />
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
  padding: theme.spacing(3, 2),
}))

export default CameraFrame
