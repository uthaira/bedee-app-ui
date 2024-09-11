import { useContext } from "react";
import { ToastContext } from "./ToastContext";
import { ToastPosition } from "./toast";
import { ToastAlignment } from "./toast.type";

const useToast = ({
  position: defaultPosition,
  duration: defaultDuration,
  showCloseButton: defaultShowCloseButton,
  showBackdrop: defaultShowBackdrop,
  alignment: defaultAlignment,
}: {
  position?: ToastPosition;
  duration?: number;
  showCloseButton?: boolean;
  showBackdrop?: boolean,
  alignment?: ToastAlignment;
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
      showBackdrop?: boolean,
      alignment?: ToastAlignment;
    } = {
      position: defaultPosition,
      duration: defaultDuration,
      showCloseButton: defaultShowCloseButton,
      showBackdrop: defaultShowBackdrop,
      alignment: defaultAlignment,
    },
  ) => {
    context[type](
      message,
      options.position ?? defaultPosition ?? context.position,
      options.duration ?? defaultDuration ?? context.duration,
      options.showCloseButton ?? defaultShowCloseButton ?? context.showCloseButton,
      options.showBackdrop ?? defaultShowBackdrop ?? context.showBackdrop,
      options.alignment ?? defaultAlignment ?? context.alignment,
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