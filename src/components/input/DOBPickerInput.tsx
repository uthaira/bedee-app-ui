import React, { useCallback, useEffect, useState } from 'react';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import {
  ClearIcon,
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
  PickerValidDate,
} from '@mui/x-date-pickers';
import { SxProps, Theme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarIcon } from '../../icons';
import TextInput from './TextInput';

interface DOBPickerProps
  extends Omit<
    DatePickerProps<PickerValidDate>,
    'open' | 'onOpen' | 'onClose'
  > {
  label?: string;
  helperText?: string;
  inputSx?: SxProps<Theme>;
  backgroundColor?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClear?: () => void
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
  onBlur,
  placeholder,
  onClear,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState<PickerValidDate | null>(
    defaultValue || null
  );

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent the DatePicker from opening
    onDateChange(null);
    onClear?.()
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

  const CustomTextField = useCallback(
    (props: any) => (
      <TextInput
        {...props}
        backgroundColor={backgroundColor}
        error={error}
        disabled={disabled}
        sx={inputSx}
        helperText={helperText}
        placeholder={placeholder}
        onBlur={onBlur}
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <InputAdornment position='end'>
              {props.value && (
                <IconButton
                  edge='end'
                  onClick={handleClear}
                  disabled={disabled}
                  size='small'
                >
                  <ClearIcon fontSize='small' />
                </IconButton>
              )}
              <IconButton edge='end' onClick={handleOpen} disabled={disabled}>
                <CalendarIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    ),
    [backgroundColor, error, disabled, helperText, onBlur, inputSx, placeholder]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={sx}>
        {label && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 14,
              mb: '14px',
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
          slots={{
            textField: CustomTextField,
            openPickerIcon: () => <CalendarIcon />,
          }}
          disabled={disabled}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DOBPicker;