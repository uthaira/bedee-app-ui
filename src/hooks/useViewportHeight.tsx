import { useEffect, useCallback, useState } from 'react';

export const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);

  const updateViewportHeight = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    setViewportHeight(vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [viewportHeight]);

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, [updateViewportHeight]);

  return viewportHeight
};