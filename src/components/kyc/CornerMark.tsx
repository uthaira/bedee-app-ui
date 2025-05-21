import { Theme } from '@emotion/react';
import { Box, SxProps } from '@mui/material';
import React from 'react';

interface CornerMarkProps {
  rotation?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  cameraViewPortHeight?: number;
}

const CornerMark: React.FC<CornerMarkProps> = ({
  rotation = 0,
  position = 'top-left',
  cameraViewPortHeight,
}) => {
  const getPositionStyles = (): SxProps<Theme> => {
    const commonStyles = {
      position: 'absolute',
      zIndex: 3,
    };

    switch (position) {
      case 'top-left':
        return {
          ...commonStyles,
          top: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight! / 2}px - 1px)`,
          left: '15px',
        };
      case 'top-right':
        return {
          ...commonStyles,
          top: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight! / 2}px - 1px)`,
          right: '15px',
        };
      case 'bottom-left':
        return {
          ...commonStyles,
          bottom: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight! / 2}px - 10px)`,
          left: '15px',
        };
      case 'bottom-right':
        return {
          ...commonStyles,
          bottom: `calc(var(--vh, 1vh) * 50 - ${cameraViewPortHeight! / 2}px - 9px)`,
          right: '15px',
        };
      default:
        return commonStyles;
    }
  };

  return (
    <Box sx={getPositionStyles()}>
      <svg
        width='33'
        height='33'
        viewBox='0 0 33 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d='M3.50412 29.7875V3L29.4412 3'
          stroke='#1E6AF6'
          strokeWidth='5.575'
          strokeLinecap='round'
        />
      </svg>
    </Box>
  );
};

export default CornerMark;