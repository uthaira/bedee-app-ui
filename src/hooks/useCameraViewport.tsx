import { useEffect, useState, useCallback } from "react";

interface CameraViewport {
  height: number;
  width: number;
};

interface CameraViewportOptions {
  maxWidth?: number;
};

export const useCameraViewport = ({ maxWidth = 520 }: CameraViewportOptions = {}): CameraViewport => {
  const [cameraViewport, setCameraViewport] = useState<CameraViewport>({ height: 234, width: 375 });

  const updateCameraViewport = useCallback(() => {
    const screenWidth = Math.min(window.innerWidth, maxWidth);
    const calculatedHeight = screenWidth / 1.54;
    setCameraViewport({ height: calculatedHeight, width: screenWidth });
  }, [maxWidth]);

  useEffect(() => {
    updateCameraViewport();

    window.addEventListener('resize', updateCameraViewport);
    window.addEventListener('orientationchange', updateCameraViewport);

    return () => {
      window.removeEventListener('resize', updateCameraViewport);
      window.removeEventListener('orientationchange', updateCameraViewport);
    };
  }, [updateCameraViewport]);

  return cameraViewport;
};