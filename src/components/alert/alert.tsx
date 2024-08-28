import { useState } from "react";

import { Box, IconButton, Paper, Stack } from "@mui/material";
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
  const {
    text,
    type = AlertType.Error,
    style = AlertStyle.Plain,
    showCloseButton = true,
  } = props;

  const [alertVisible, setAlertVisible] = useState(true);

  return alertVisible ? (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: getBgColor(style, type),
        padding: 2,
        borderRadius: 2,
        marginY: 1,
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
        <Stack direction="row" alignItems={"center"}>
          {renderIcon(type)}
          <Box sx={{ marginLeft: 1, width: "100%" }}>
            {typeof text === "string" ? (
              <P1 text={text} color={getMessageColor(style, type)} />
            ) : (
              text
            )}
          </Box>
        </Stack>
        {showCloseButton && (
          <IconButton
            onClick={() => setAlertVisible(false)}
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