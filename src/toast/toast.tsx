import { useState, useMemo } from "react";
import { Box, IconButton, Paper, Stack, SxProps, Theme } from "@mui/material";
import { ToastStyle, ToastType } from "./toast.type";
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

interface IToast {
  text: string | JSX.Element;
  type?: ToastType;
  style?: ToastStyle;
  showCloseButton?: boolean;
  elevation?: number;
  sx?: SxProps<Theme>;
  onClose?: () => void;
}

const Toast = ({
  text,
  type = ToastType.Error,
  style = ToastStyle.Fill,
  showCloseButton = true,
  elevation = 6,
  onClose,
  sx,
}: IToast) => {
  const [toastVisible, setToastVisible] = useState(true);

  const handleClose = () => {
    setToastVisible(false);
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

  if (!toastVisible) return null;

  return (
    <Paper
      elevation={elevation}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor,
        padding: 2,
        borderRadius: 2,
        marginY: 1,
        ...sx,
      }}
    >
      <Stack
        direction="row"
        gap={2}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center">
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
  );
};

export default Toast;