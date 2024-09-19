import React from "react";
import {
  Box,
  Radio,
  Typography,
  IconButton,
  styled,
  SxProps,
  Theme,
} from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";
import { Colors } from "../../colors";
import { BaseText } from "../font";

interface RadioButtonProps {
  value?: boolean | null;
  message?: React.ReactNode | string;
  disabled?: boolean;
  color?: string;
  onPress?: () => void;
  checkedStyle?: React.CSSProperties;
  unCheckStyle?: React.CSSProperties;
  fontSize?: number;
  sx?: SxProps<Theme>;
  errorMessage?: string;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const {
    value,
    disabled,
    message,
    color = Colors.primary001,
    onPress,
    checkedStyle,
    unCheckStyle,
    fontSize,
    sx,
    errorMessage,
  } = props;

  return (
    <Box>
      <StyledBox onClick={onPress} disabled={disabled}>
        <Radio
          checked={!!value}
          onClick={onPress}
          disabled={disabled}
          sx={sx}
          icon={
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: Colors.gray2,
                ...unCheckStyle,
              }}
            />
          }
          checkedIcon={
            <IconButton
              sx={{
                width: 24,
                height: 24,
                backgroundColor: color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...checkedStyle,
              }}
            >
              <CheckIcon sx={{ color: "white", width: 16, height: 16 }} />
            </IconButton>
          }
        />
        {message &&
          (typeof message === "string" ? (
            <Typography
              sx={{
                ml: 1,
                fontSize: fontSize ?? 16,
                color: "#000A0A",
                fontWeight: 600,
              }}
            >
              {message}
            </Typography>
          ) : (
            message
          ))}
      </StyledBox>
      {errorMessage && (
        <BaseText
          sx={{
            color: Colors.error,
            fontSize: "13px",
            mt: "3px",
          }}
          text={errorMessage}
        />
      )}
    </Box>
  );
};

export default RadioButton;

const StyledBox = styled(Box)<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    display: "flex",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  })
);
