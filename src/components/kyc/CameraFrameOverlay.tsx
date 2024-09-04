import React from 'react';
import { Box, SxProps, Theme, styled } from '@mui/material';

interface CameraFrameOverlayProps {
  overlayPosition: 'top' | 'bottom' | 'left' | 'right';
  cameraViewPortHeight?: number;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const WIDTH_CONSTANT = '16px';

const StyledOverlayBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'overlayPosition' && prop !== 'cameraViewPortHeight',
})<CameraFrameOverlayProps>(({ overlayPosition, cameraViewPortHeight = 0 }) => {
  const topBottomStyle = {
    width: '100%',
    height: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight / 2}px)`,
  };

  const leftRightStyle = {
    top: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight / 2}px)`,
    height: `${cameraViewPortHeight}px`,
    width: WIDTH_CONSTANT,
  };

  switch (overlayPosition) {
    case 'top':
      return { top: 0, left: 0, ...topBottomStyle };
    case 'bottom':
      return { bottom: 0, left: 0, ...topBottomStyle };
    case 'left':
      return { left: 0, ...leftRightStyle };
    case 'right':
      return { right: 0, ...leftRightStyle };
    default:
      return {};
  }
});

const CameraFrameOverlay: React.FC<CameraFrameOverlayProps> = ({
  overlayPosition,
  cameraViewPortHeight,
  sx,
  children,
}) => {
  return (
    <StyledOverlayBox
      overlayPosition={overlayPosition}
      cameraViewPortHeight={cameraViewPortHeight}
      sx={{
        position: 'absolute',
        backgroundColor: 'rgba(7, 34, 109, 0.6)',
        zIndex: 2,
        ...sx,
      }}
    >
      {children}
    </StyledOverlayBox>
  );
};

export default CameraFrameOverlay;