import React from "react";
import { TextField, TextFieldProps, Typography, Box } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../colors"; // Adjust this import path as needed

const StyledTextField = styled(TextField)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor }) => ({
    "& .MuiOutlinedInput-root": {
      color: Colors.gray7,
      borderRadius: "8px",
      fontSize: "14px",
      backgroundColor: backgroundColor ?? Colors.white,
      height: '56px',

      "&.Mui-disabled": {
        backgroundColor: Colors.gray2,
      },
      "& input": {
        padding: "15px 16px",
      },
      "& fieldset": {
        borderColor: Colors.gray2,
      },
      "&:hover fieldset": {
        borderColor: Colors.primary001,
      },
      "&.Mui-focused": {
        outline: 0,
        
        "& fieldset": {
          border: `1px solid ${Colors.primary001}`,
        }
      },
      "&.Mui-disabled fieldset": {
        borderColor: Colors.gray2,
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: 0,
    },
  })
);

interface TextInputProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  helperText?: string;
  inputSx?: SxProps<Theme>;
  backgroundColor?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  sx,
  inputSx,
  backgroundColor,
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
      <StyledTextField
        variant="outlined"
        fullWidth
        helperText={helperText}
        sx={inputSx}
        backgroundColor={backgroundColor}
        {...props}
      />
    </Box>
  );
};

export default TextInput;
