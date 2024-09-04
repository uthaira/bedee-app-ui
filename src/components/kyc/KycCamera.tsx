import React, { useRef, useState, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, styled } from '@mui/material';
import CameraFrame from './CameraFrame';

import { useViewportHeight, useCameraViewport } from '../../hooks';
import { Colors } from '../../colors';
import { H3, P1 } from '../font';

import IdCardFrame from './IdCardFrame';

enum EFacingMode {
  USER = 'user',
  ENVIRONMENT = 'environment',
}

interface Content {
  captureInstruction: string;
  placementInstruction: string;
  cameraOverlayFrame: JSX.Element;
}

interface KycCameraProps {
  onTakePhoto?: (photo: string) => void;
  content?: Content;
}

const KycCamera: React.FC<KycCameraProps> = ({
  onTakePhoto,
  content = {
    captureInstruction: 'ถ่ายรูปหน้า\nบัตรประชาชน',
    placementInstruction: 'วางบัตรประชาชนของคุณในกรอบ\nโดยถ่ายให้เห็นข้อมูลชัดเจน ไม่เบลอ',
    cameraOverlayFrame: <IdCardFrame />,
  },
}) => {
  const webcamRef = useRef<Webcam | null>(null);
  const [facingMode, setFacingMode] = useState<EFacingMode>(EFacingMode.ENVIRONMENT);

  const viewportHeight = useViewportHeight();
  const { height: cameraViewportHeight, width: cameraViewportWidth } = useCameraViewport();

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (ctx) {
            const zoomFactor = 1.1;

            canvas.width = cameraViewportWidth;
            canvas.height = cameraViewportHeight;

            const sw = cameraViewportWidth / zoomFactor;
            const sh = cameraViewportHeight / zoomFactor;

            const sx = (img.width - sw) / 2;
            const sy = (img.height - sh) / 2;

            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

            const croppedImageSrc = canvas.toDataURL('image/jpeg', 1.0);

            onTakePhoto?.(croppedImageSrc);
  
          }
        };
      }
    }
  }, [cameraViewportWidth, cameraViewportHeight, webcamRef]);

  return (
    <StyledContainer>
      <Webcam
        audio={false}
        autoPlay={true}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          facingMode,
          aspectRatio: 16 / 9,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />

      <CameraFrame
        onFacingMode={setFacingMode}
        onCapture={handleCapture}
        cameraViewPortHeight={cameraViewportHeight}
        viewportHeight={viewportHeight}
        captureInstruction={
          <H3
            text={content?.captureInstruction}
            color={Colors.white}
            sx={{
              fontWeight: 600,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          />
        }
        placementInstruction={
          <P1
            text={content?.placementInstruction}
            color={Colors.white}
            sx={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              textAlign: 'center'
            }}
          />
        }
        cameraOverlayFrame={content?.cameraOverlayFrame}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'calc(var(--vh, 1vh) * 100)',
  width: '100%',
  maxWidth: '520px',
  overflow: 'hidden',
  margin: '0 auto',
}));

export default KycCamera;