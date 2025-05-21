import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { SxProps, Theme } from "@mui/material/styles";
import { AlertStyle, AlertType } from "./alert.type";
import {
  AttentionNotificationIcon,
  CloseNotificationIcon,
  ErrorNotificationIcon,
  InfoNotificationIcon,
  SuccessNotificationIcon,
  WarningNotificationIcon,
} from "../../icons";
import { Colors } from "../../colors";
import { P1 } from "../font";

interface IAlert {
  text: string | JSX.Element;
  type?: AlertType;
  style?: AlertStyle;
  showCloseButton?: boolean;
  elevation?: number;
  sx?: SxProps<Theme>;
  onClose?: () => void;
}

const getBgColor = (style: AlertStyle, type: AlertType): string => {
  if (style === AlertStyle.Fill) {
    switch (type) {
      case AlertType.Success:
        return Colors.backgroundGreen;
      case AlertType.Error:
        return Colors.backgroundRed;
      case AlertType.Info:
        return Colors.aliceBlue;
      case AlertType.Warning:
        return Colors.backgroundOrange;
      default:
        return Colors.white;
    }
  } else {
    return Colors.white;
  }
};

const getMessageColor = (style: AlertStyle, type: AlertType): string => {
  if (style === AlertStyle.Fill) {
    switch (type) {
      case AlertType.Success:
        return Colors.textSuccess;
      case AlertType.Error:
        return Colors.textError;
      case AlertType.Info:
        return Colors.textRoyalBlue;
      case AlertType.Warning:
        return Colors.textWarning;
      default:
        return Colors.black;
    }
  } else {
    return Colors.black;
  }
};

const renderIcon = (type: AlertType): JSX.Element => {
  switch (type) {
    case AlertType.Success:
      return <SuccessNotificationIcon />;
    case AlertType.Info:
      return <InfoNotificationIcon />;
    case AlertType.Notice:
      return <AttentionNotificationIcon />;
    case AlertType.Warning:
      return <WarningNotificationIcon />;
    default:
      return <ErrorNotificationIcon />;
  }
};

const Alert = (props: IAlert) => {
  const { text, type = AlertType.Error, style = AlertStyle.Plain, showCloseButton = true, elevation = 6, onClose, sx } = props;

  const [alertVisible, setAlertVisible] = useState(true);

  return alertVisible ? (
    <Paper
      elevation={elevation}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: getBgColor(style, type),
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
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack direction="row">
          {renderIcon(type)}
          <Stack marginLeft={1} width="100%" justifyContent='center'>
            {typeof text === "string" ? <P1 text={text} color={getMessageColor(style, type)} /> : text}
          </Stack>
        </Stack>
        {showCloseButton && (
          <IconButton
            onClick={() => {
              setAlertVisible(false);
              onClose && onClose();
            }}
            size="small"
            sx={{ padding: 0 }}
          >
            <CloseNotificationIcon />
          </IconButton>
        )}
      </Stack>
    </Paper>
  ) : null;
};

export default Alert;
