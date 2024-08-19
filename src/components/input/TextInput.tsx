import React from "react";
import { TextField, TextFieldProps, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../colors"; // Adjust this import path as needed

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: Colors.gray7,
    borderRadius: "8px",
    fontSize: "14px",
    backgroundColor: Colors.offWhite,

    "& input": {
      padding: "14.55px 16px",
    },
    "& fieldset": {
      borderColor: Colors.gray2,
    },
    "&:hover fieldset": {
      borderColor: Colors.gray2,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.gray2,
    },
    "&.Mui-disabled fieldset": {
      borderColor: Colors.gray2,
    },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
}));

interface TextInputProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  sx,
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
        {...props}
      />
    </Box>
  );
};

export default TextInput;
