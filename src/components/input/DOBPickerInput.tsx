import React, { useState } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import {
  DatePicker,
  DatePickerProps,
  PickerValidDate,
} from "@mui/x-date-pickers";
import { SxProps, Theme } from "@mui/material/styles";
import TextInput from "./TextInput";
import { Colors } from "../../colors";
import { CalendarIcon } from "../../icons";

interface DOBPickerProps extends Omit<DatePickerProps<PickerValidDate>, 'open' | 'onOpen' | 'onClose'> {
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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        slots={{
          textField: (props) => (
            <TextInput
              {...props}
              backgroundColor={backgroundColor}
              error={error}
              disabled={disabled}
              sx={inputSx}
              helperText={helperText}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      edge="end" 
                      onClick={handleOpen}
                      disabled={disabled}
                    >
                      <CalendarIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
