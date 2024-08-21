import React from "react";
import { Box, Typography } from "@mui/material";
import {
  DatePicker,
  DatePickerProps,
  PickerValidDate,
} from "@mui/x-date-pickers";
import { SxProps, Theme } from "@mui/material/styles";
import TextInput from "./TextInput";
import { Colors } from "../../colors";
import { CalendarIcon } from "../../icons";

interface DOBPickerProps extends DatePickerProps<PickerValidDate> {
  label?: string;
  helperText?: string;
  sx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  backgroundColor?: string;
  disabled?: boolean;
  error?: boolean;
}

const DOBPicker: React.FC<DOBPickerProps> = ({
  label,
  helperText,
  sx,
  inputSx,
  backgroundColor,
  disabled,
  error,
  ...props
}) => {
  return (
    <Box sx={sx}>
      {label && (
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 14,
            mb: "14px",
          }}
        >
          {label}
        </Typography>
      )}
      <DatePicker
        {...props}
        slots={{
          textField: (props) => (
            <TextInput
              {...props}
              backgroundColor={backgroundColor}
              error={error}
              disabled={disabled}
              sx={inputSx}
              helperText={helperText}
            />
          ),
          openPickerIcon: () => <CalendarIcon />,
        }}
        disabled={disabled}
      />
    </Box>
  );
};

export default DOBPicker;
