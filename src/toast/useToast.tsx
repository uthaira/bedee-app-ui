import { useContext } from "react";
import { ToastContext, ToastPosition } from "./ToastContext";

const useToast = ({
  position: defaultPosition,
  duration: defaultDuration,
  showCloseButton: defaultShowCloseButton,
}: {
  position?: ToastPosition;
  duration?: number;
  showCloseButton?: boolean;
} = {}) => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const createToast = (type: 'success' | 'error' | 'info' | 'warn') => (
    message: string,
    options: {
      position?: ToastPosition;
      duration?: number;
      showCloseButton?: boolean;
    } = {
      position: defaultPosition,
      duration: defaultDuration,
      showCloseButton: defaultShowCloseButton,
    },
  ) => {
    console.log('options', options);
    context[type](
      message,
      options.position ?? defaultPosition ?? context.position,
      options.duration ?? defaultDuration ?? context.duration,
      options.showCloseButton ?? defaultShowCloseButton ?? context.showCloseButton
    );
  };

  return {
    success: createToast('success'),
    error: createToast('error'),
    info: createToast('info'),
    warn: createToast('warn'),
  };
};

export default useToast;