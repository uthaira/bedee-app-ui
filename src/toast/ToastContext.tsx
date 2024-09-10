import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Slide, Snackbar, SnackbarOrigin } from '@mui/material';
import { Alert, AlertType, AlertStyle } from '../components/alert';

export enum ToastCloseReason {
  ClickAway = 'clickaway',
}

export enum ToastPosition {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
}

export interface ToastContextType {
  success: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  error: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  info: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  warn: (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => void;
  position: ToastPosition;
  duration: number;
  showCloseButton: boolean;
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
  position = ToastPosition.TopRight,
  duration = 3000,
  showCloseButton = true,
}: ToastProviderProps) => {
  const initialState = {
    message: '',
    alertType: AlertType.Success,
    open: false,
    position,
    duration,
    showCloseButton,
  };

  const [toast, setToast] = useState<ToastState>(initialState);

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
      setToast({
        message,
        alertType,
        open: true,
        position: position ?? initialState.position,
        duration: duration ?? initialState.duration,
        showCloseButton: showCloseButton ?? initialState.showCloseButton,
      });
    },
    [initialState]
  );

  const success = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Success, position ?? initialState.position, duration, showCloseButton);
    },
    [showToast]
  );

  const error = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Error, position ?? initialState.position, duration, showCloseButton);
    },
    [showToast]
  );

  const info = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Info, position ?? initialState.position, duration, showCloseButton);
    },
    [showToast]
  );

  const warn = useCallback(
    (message: string, position?: ToastPosition, duration?: number, showCloseButton?: boolean) => {
      showToast(message, AlertType.Warning, position ?? initialState.position, duration, showCloseButton);
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
      }}
    >
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
            width: 'calc(100vw - 32px)',
            maxWidth: '400px',
          }}
        />
      </Snackbar>
    </ToastContext.Provider>
  );
};

export default ToastProvider;