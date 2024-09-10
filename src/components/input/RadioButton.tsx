import React from 'react';
import { Box, Radio, Typography, IconButton, styled } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { Colors } from '../../colors';

interface RadioButtonProps {
  value?: boolean | null;
  message?: string;
  disabled?: boolean;
  color?: string;
  onPress?: () => void;
  checkedStyle?: React.CSSProperties;
  unCheckStyle?: React.CSSProperties;
  fontSize?: number;
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
  } = props;

  return (
    <StyledBox onClick={onPress} disabled={disabled}>
      <Radio
        checked={!!value}
        onClick={onPress}
        disabled={disabled}
        icon={
          <Box
            sx={{
              ...unCheckStyle,
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: Colors.gray2,
            }}
          />
        }
        checkedIcon={
          <IconButton
            sx={{
              ...checkedStyle,
              width: 24,
              height: 24,
              backgroundColor: color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CheckIcon sx={{ color: 'white', width: 16, height: 16 }} />
          </IconButton>
        }
      />
      {message && (
        <Typography
          sx={{
            ml: 1,
            fontSize: fontSize ?? 16,
            color: '#000A0A',
            fontWeight: 600,
          }}
        >
          {message}
        </Typography>
      )}
    </StyledBox>
  );
};

export default RadioButton;

const StyledBox = styled(Box)<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  })
);