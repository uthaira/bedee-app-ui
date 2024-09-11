import { createContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { ToastAlignment, ToastType } from './toast.type';
import Toast, { ToastPosition, ToastPositionEnum } from './toast';


export interface ToastContextType {
  success: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => void;
  error: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => void;
  info: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => void;
  warn: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => void;
  position?: ToastPosition;
  duration?: number;
  showCloseButton?: boolean;
  showBackdrop?: boolean,
  alignment?: ToastAlignment;
}

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  duration?: number;
  showCloseButton?: boolean;
  showBackdrop?: boolean,
  alignment?: ToastAlignment;
}

export interface ToastState {
  message: string;
  toastType: ToastType;
  open: boolean;
  position?: ToastPosition;
  duration?: number;
  showCloseButton?: boolean;
  showBackdrop?: boolean,
  alignment?: ToastAlignment
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider = ({
  children,
  position = ToastPositionEnum.TopCenter,
  duration = 3000,
  showCloseButton = true,
  showBackdrop = false,
  alignment = ToastAlignment.Center,
}: ToastProviderProps) => {
  const initialState = {
    message: '',
    toastType: ToastType.Success,
    open: false,
    position,
    duration,
    showCloseButton,
    showBackdrop,
    alignment,
  };

  const [toast, setToast] = useState<ToastState>(initialState);

  const showToast = useCallback(
    (message: string, toastType: ToastType, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => {
      setToast({
        message,
        toastType,
        open: true,
        position: position ?? initialState.position,
        duration: duration ?? initialState.duration,
        showCloseButton: showCloseButton ?? initialState.showCloseButton,
        showBackdrop: showBackdrop ?? initialState.showBackdrop,
        alignment: alignment ?? initialState.alignment,
      });
    },
    [initialState]
  );

  const createToast = useCallback(
  (toastType: ToastType) => {
    return (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean, showBackdrop?: boolean, alignment?: ToastAlignment) => {
      showToast(message, toastType, position, duration, showCloseButton, showBackdrop, alignment);
    };
  },
  [showToast]
);

  const success = useMemo(() => createToast(ToastType.Success), [createToast]);
  const error = useMemo(() => createToast(ToastType.Error), [createToast]);
  const info = useMemo(() => createToast(ToastType.Info), [createToast]);
  const warn = useMemo(() => createToast(ToastType.Warning), [createToast]);

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const handleClose = useCallback(() => {
    closeToast();
  }, [closeToast]);

  return (
    <ToastContext.Provider
      value={{
        success,
        error,
        info,
        warn,
        position: initialState.position,
        duration: initialState.duration,
        showCloseButton: initialState.showCloseButton,
        showBackdrop: initialState.showBackdrop,
        alignment: initialState.alignment,
      }}
    >
      {children}
      <Toast
        text={toast.message}
        type={toast.toastType}
        showCloseButton={toast.showCloseButton}
        showBackdrop={toast.showBackdrop}
        duration={toast.duration}
        position={toast.position}
        alignment={toast.alignment}
        open={toast.open}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider;