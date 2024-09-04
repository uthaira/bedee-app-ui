import React from 'react';
import { Box, IconButton, Stack, styled } from '@mui/material';
import CameraViewPort from './CameraViewPort';
import CornerMark from './CornerMark';
import CameraFrameOverlay from './CameraFrameOverlay';
import TakePhotoIcon from './TakePhotoIcon';

enum EFacingMode {
  USER = 'user',
  ENVIRONMENT = 'environment',
}

interface CameraFrameProps {
  onFacingMode: (mode: EFacingMode) => void;
  onCapture: () => void;
  onToggleTorch?: () => void;
  cameraViewPortHeight?: number;
  viewportHeight?: number;
  cameraOverlayFrame?: React.ReactNode;
  captureInstruction?: React.ReactNode;
  placementInstruction?: React.ReactNode;
}

const CameraFrame: React.FC<CameraFrameProps> = ({
  onFacingMode,
  onCapture,
  onToggleTorch,
  cameraViewPortHeight = 234,
  viewportHeight,
  cameraOverlayFrame,
  captureInstruction,
  placementInstruction,
}) => {
  return (
    <Container>
      <CameraFrameOverlay
        overlayPosition='top'
        cameraViewPortHeight={cameraViewPortHeight}
      >
        <CaptureInstruction>
          {captureInstruction}
        </CaptureInstruction>
      </CameraFrameOverlay>

      <CameraFrameOverlay overlayPosition='bottom' cameraViewPortHeight={cameraViewPortHeight}>
        <BottomSection>
          <Box marginBottom="40px">
            {placementInstruction}
          </Box>

          <Stack direction="row" justifyContent="center" width="100%">
            <IconButton onClick={onCapture}>
              <TakePhotoIcon />
            </IconButton>
          </Stack>
        </BottomSection>
      </CameraFrameOverlay>

      <CameraFrameOverlay overlayPosition='left' cameraViewPortHeight={cameraViewPortHeight} />
      <CameraFrameOverlay overlayPosition='right' cameraViewPortHeight={cameraViewPortHeight} />

      <CornerMark rotation={0} position="top-left" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={90} position="top-right" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={-90} position="bottom-left" cameraViewPortHeight={cameraViewPortHeight} />
      <CornerMark rotation={180} position="bottom-right" cameraViewPortHeight={cameraViewPortHeight} />

      <CameraViewPort viewPortHeight={cameraViewPortHeight}>
        {cameraOverlayFrame}
      </CameraViewPort>
    </Container>
  );
};

const Container = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
});

const CaptureInstruction = styled(Stack)(({ theme }) => ({
  justifyContent: 'flex-end',
  height: '100%',
  padding: theme.spacing(4, 3, 5, 3),
}));

const BottomSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
  padding: theme.spacing(3, 4),
}));

export default CameraFrame;