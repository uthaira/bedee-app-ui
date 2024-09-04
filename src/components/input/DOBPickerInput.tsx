import React, { useEffect, useState } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import {
  ClearIcon,
  DatePicker,
  DatePickerProps,
  PickersActionBar,
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
  placeholder?: string;
}

const DOBPicker: React.FC<DOBPickerProps> = ({
  label,
  helperText,
  sx,
  inputSx,
  backgroundColor,
  disabled,
  error,
  value,
  defaultValue,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState<PickerValidDate | null>(defaultValue || null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent the DatePicker from opening
    onDateChange(null);
  };

  const onDateChange = (date: PickerValidDate | null) => {
    handleDateChange(date);
    if (onChange) {
      onChange(date, { validationError: null });
    }
  };

  useEffect(() => {
    if (value) {
      handleDateChange(value);
    }
  }, [value]);

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
        value={selectedDate}
        onChange={onDateChange}
        slotProps={{ textField: { placeholder: props.placeholder } }}
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
                ...props.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    {props.value && (
                      <IconButton
                        edge="end"
                        onClick={handleClear}
                        disabled={disabled}
                        size="small"
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    )}
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