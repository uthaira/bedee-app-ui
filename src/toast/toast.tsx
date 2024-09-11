import { useMemo } from "react";
import { Backdrop, Box, IconButton, Paper, Snackbar, SnackbarOrigin, Stack, SxProps, Theme } from "@mui/material";
import { ToastAlignment, ToastStyle, ToastType } from "./toast.type";
import {
  AttentionNotificationIcon,
  CloseNotificationIcon,
  ErrorNotificationIcon,
  InfoNotificationIcon,
  SuccessNotificationIcon,
  WarningNotificationIcon,
} from "../icons";
import { Colors } from "../colors";
import { P1 } from "../components/font";

export enum ToastCloseReason {
  ClickAway = 'clickaway',
}

export enum ToastPositionEnum {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
}

export type ToastPosition = typeof ToastPositionEnum[keyof typeof ToastPositionEnum];

const getPosition = (position?: ToastPosition): SnackbarOrigin => {
  if (position && Object.values(ToastPositionEnum).includes(position as ToastPositionEnum)) {
    const positionsMap: Record<ToastPositionEnum, SnackbarOrigin> = {
      [ToastPositionEnum.TopLeft]: { vertical: 'top', horizontal: 'left' },
      [ToastPositionEnum.TopCenter]: { vertical: 'top', horizontal: 'center' },
      [ToastPositionEnum.TopRight]: { vertical: 'top', horizontal: 'right' },
      [ToastPositionEnum.BottomLeft]: { vertical: 'bottom', horizontal: 'left' },
      [ToastPositionEnum.BottomCenter]: { vertical: 'bottom', horizontal: 'center' },
      [ToastPositionEnum.BottomRight]: { vertical: 'bottom', horizontal: 'right' },
    };

    return positionsMap[position];
  }

  return { vertical: 'top', horizontal: 'center' };

};

const getAlignment = (alignment: ToastAlignment) => {
  switch (alignment) {
    case ToastAlignment.Top:
      return "flex-start";
    case ToastAlignment.Center:
      return "center";
    case ToastAlignment.Bottom:
      return "flex-end";
    default:
      return "center";
  }
}

interface IToast {
  text: string | JSX.Element;
  open: boolean;
  type?: ToastType;
  style?: ToastStyle;
  showCloseButton?: boolean;
  showBackdrop?: boolean;
  elevation?: number;
  duration?: number;
  position?: ToastPosition;
  alignment?: ToastAlignment;
  sx?: SxProps<Theme>;
  onClose?: () => void;
}

const Toast = ({
  text,
  open = false,
  type = ToastType.Error,
  style = ToastStyle.Fill,
  alignment = ToastAlignment.Center,
  showCloseButton = true,
  showBackdrop = false,
  elevation = 6,
  duration = 3000,
  position = ToastPositionEnum.TopCenter,
  onClose,
  sx,
}: IToast) => {
  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === ToastCloseReason.ClickAway) {
      return;
    }
    onClose?.();
  };

  const backgroundColor = useMemo(() => {
    if (style === ToastStyle.Fill) {
      switch (type) {
        case ToastType.Success:
          return Colors.toastBackgroundSuccess;
        case ToastType.Error:
          return Colors.toastBackgroundError;
        case ToastType.Info:
          return Colors.toastBackgroundInfo;
        case ToastType.Warning:
          return Colors.toastBackgroundWarning;
        default:
          return Colors.white;
      }
    }
    return Colors.white;
  }, [style, type]);

  const renderIcon = useMemo(() => {
    switch (type) {
      case ToastType.Success:
        return <SuccessNotificationIcon />;
      case ToastType.Info:
        return <InfoNotificationIcon />;
      case ToastType.Notice:
        return <AttentionNotificationIcon />;
      case ToastType.Warning:
        return <WarningNotificationIcon />;
      default:
        return <ErrorNotificationIcon />;
    }
  }, [type]);

  const alignmentStyle = useMemo(() => {
    return getAlignment(alignment);
  }, [alignment]);

  return (
    <>
      <Backdrop
        open={open && showBackdrop}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      />
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={getPosition(position)}
        key={text + type}
      >
        <Paper
          elevation={elevation}
          sx={{
            display: "flex",
            alignItems: alignmentStyle,
            backgroundColor,
            padding: 2,
            borderRadius: 2,
            ...sx,
          }}
        >
          <Stack
            direction="row"
            gap={2}
            sx={{
              justifyContent: "space-between",
              alignItems: alignmentStyle,
              width: "100%",
            }}
          >
            <Stack direction="row" alignItems={alignmentStyle}>
              {renderIcon}
              <Box sx={{ marginLeft: 1, width: "100%" }}>
                {typeof text === "string" ? (
                  <P1 text={text} color={Colors.gray8} />
                ) : (
                  text
                )}
              </Box>
            </Stack>
            {showCloseButton && (
              <IconButton onClick={handleClose} size="small" sx={{ padding: 0 }}>
                <CloseNotificationIcon />
              </IconButton>
            )}
          </Stack>
        </Paper>
      </Snackbar>
    </>
  );
};

export default Toast;