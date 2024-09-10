import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Slide, Snackbar, SnackbarOrigin } from '@mui/material';
import { Alert, AlertType, AlertStyle } from '../components/alert';

export enum ToastCloseReason {
  ClickAway = 'clickaway',
}

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastContextType {
  success: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  error: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  info: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  warn: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  setPosition: (position: ToastPosition) => void;
  setDuration: (duration: number) => void;
  setShowCloseButton?: (showCloseButton: boolean) => void;
}

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  duration?: number;
  transitionComponent?: any;
  showCloseButton?: boolean;
}

export interface ToastState {
  message: string;
  alertType: AlertType;
  open: boolean;
  position: ToastPosition;
  duration: number;
  showCloseButton: boolean;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider = ({
  children,
  transitionComponent = Slide,
  position = 'top-center',
  duration = 3000,
  showCloseButton = true,
}: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    alertType: AlertType.Success,
    open: false,
    position,
    duration,
    showCloseButton,
  });

  const getPosition = (position: ToastPosition): SnackbarOrigin => {
    const positionsMap: Record<ToastPosition, SnackbarOrigin> = {
      'top-left': { vertical: 'top', horizontal: 'left' },
      'top-center': { vertical: 'top', horizontal: 'center' },
      'top-right': { vertical: 'top', horizontal: 'right' },
      'bottom-left': { vertical: 'bottom', horizontal: 'left' },
      'bottom-center': { vertical: 'bottom', horizontal: 'center' },
      'bottom-right': { vertical: 'bottom', horizontal: 'right' },
    };
    return positionsMap[position];
  };

  const showToast = useCallback(
    (message: string, alertType: AlertType, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      setToast((prev) => ({
        ...prev,
        message,
        alertType,
        open: true,
        position: position || prev.position,
        duration: duration || prev.duration,
        showCloseButton: showCloseButton || prev.showCloseButton,
      }));
    },
    []
  );

  const success = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Success, position, duration, showCloseButton);
    },
    [showToast]
  );

  const error = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Error, position, duration, showCloseButton);
    },
    [showToast]
  );

  const info = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Info, position, duration, showCloseButton);
    },
    [showToast]
  );

  const warn = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Warning, position, duration, showCloseButton);
    },
    [showToast]
  );

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const handleClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === ToastCloseReason.ClickAway) {
        return;
      }
      closeToast();
    },
    [closeToast]
  );

  const setPosition = useCallback((position: ToastPosition) => {
    setToast((prev) => ({ ...prev, position }));
  }, []);

  const setDuration = useCallback((duration: number) => {
    setToast((prev) => ({ ...prev, duration }));
  }, []);

  const setShowCloseButton = useCallback((showCloseButton: boolean) => {
    setToast((prev) => ({ ...prev, showCloseButton }));
  }, []);

  return (
    <ToastContext.Provider value={{ success, error, info, warn, setPosition, setDuration, setShowCloseButton }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={toast.duration}
        onClose={handleClose}
        anchorOrigin={getPosition(toast.position)}
        TransitionComponent={transitionComponent}
      >
        <Alert
          text={toast.message}
          type={toast.alertType}
          style={AlertStyle.Fill}
          onClose={closeToast}
          elevation={2}
          showCloseButton={toast.showCloseButton}
          sx={{
            borderRadius: '8px',
            width: '100%',
          }}
        />
      </Snackbar>
    </ToastContext.Provider>
  );
};

export default ToastProvider;