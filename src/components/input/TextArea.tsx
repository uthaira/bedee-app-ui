import React, { useMemo } from 'react';
import { styled, SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Colors } from '../../colors';

const DEFAULT_ROWS = 3;

export interface TextAreaProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  borderColor?: string;
  borderActiveColor?: string;
  fontSize?: string;
  borderRadius?: string;
  placeholderColor?: string;
  rows?: number;
  sx?: SxProps<Theme>;
  inputProps: React.InputHTMLAttributes<HTMLTextAreaElement>;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  borderColor,
  fontSize,
  borderRadius,
  placeholderColor,
  borderActiveColor,
  rows = DEFAULT_ROWS,
  sx,
  inputProps,
  helperText,
  error,
  disabled = false,
  ...props
}) => {
  const colorConfig = {
    borderColor: borderColor || Colors.gray0,
    borderActiveColor: borderActiveColor || Colors.primary001,
    fontSize: fontSize || '14px',
    borderRadius: borderRadius || '8px',
    placeholderColor: placeholderColor || Colors.gray4,
  };

  const currentTextCount = useMemo(() => value?.length ?? 0, [value]);

  return (
    <Box sx={{ width: '100%', position: 'relative', ...sx }}>
      <TextField
        value={value}
        placeholder={placeholder}
        inputProps={{ maxLength, ...inputProps }}
        helperText={helperText}
        error={error}
        rows={rows}
        variant="outlined"
        disabled={disabled}
        fullWidth
        multiline
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: colorConfig.fontSize,
            borderRadius: colorConfig.borderRadius,
            padding: "15px 8px",
            paddingRight: maxLength ? '50px' : '8px',
            
            '& fieldset': {
              borderColor: colorConfig.borderColor,
              borderWidth: '1px'
            },

            '&:hover fieldset': {
              borderColor: colorConfig.borderActiveColor,
              borderWidth: '1px'
            },

            '&.Mui-focused fieldset': {
              borderColor: colorConfig.borderActiveColor,
              borderWidth: '1px'
            },

            "&.Mui-disabled fieldset": {
              borderColor: Colors.gray2,
            },

            '&.Mui-error fieldset': {
              borderColor: Colors.error,
            },
          },
  
          '& .MuiInputBase-input::placeholder': {
            color: colorConfig.placeholderColor,
          },

          '& .MuiFormHelperText-root': {
            marginLeft: 0,
          },

          '& .MuiFormHelperText-contained': {
            marginLeft: 0,
          },

          '& .MuiFormHelperText-root.Mui-error': {
            marginLeft: 0,
            color: Colors.error,
            fontSize: "13px"
          },

          '& .MuiFormHelperText-contained.Mui-error': {
            marginLeft: 0,
          },

          '& .MuiFormHelperText-root.Mui-disabled': {
            marginLeft: 0,
          },  
        }}
        {...props}
      />
      {maxLength && (
        <StyledTextareaCounter
          disabled={disabled}
        >
          {`${currentTextCount}/${maxLength}`}
        </StyledTextareaCounter>
      )}
    </Box>
  );
};

const StyledTextareaCounter = styled('p')`
  position: absolute;
  top: 0;
  right: 8px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ disabled }: { disabled: boolean }) => (disabled ? Colors.gray2 : Colors.gray5)}; 
`;

export default TextArea;