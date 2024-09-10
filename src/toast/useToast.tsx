import { useContext } from "react";
import { ToastContext, ToastPosition } from "./ToastContext";

const useToast = ({
  position,
  duration,
  showCloseButton,
}: { position?: ToastPosition; duration?: number, showCloseButton?: boolean } = {}) => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return {
    success: (message: string) => context.success(message, position, duration, showCloseButton),
    error: (message: string) => context.error(message, position, duration, showCloseButton),
    info: (message: string) => context.info(message, position, duration, showCloseButton),
    warn: (message: string) => context.warn(message, position, duration, showCloseButton),
  };
};

export default useToast;