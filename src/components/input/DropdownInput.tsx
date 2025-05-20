import React from "react";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../colors";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { P2 } from "../font";

const StyledSelect = styled(Select)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor }) => ({
    "&.Mui-error > .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.error,
    },
    "&.MuiInputBase-root": {
      height: '56px',
    },
    "& .MuiSelect-select": {
      padding: "15px 16px",
      color: Colors.gray7,
      borderRadius: "8px",
      fontSize: "14px",
      backgroundColor: backgroundColor ?? Colors.white,
      borderColor: Colors.gray2,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.gray2,
      borderRadius: "8px",
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.primary001,
    },
    "&.Mui-focused": {
      outline: 0,
        
      "& > .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${Colors.primary001}`,
      }
    },
    "&.Mui-disabled > .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.gray2,
      backgroundColor: Colors.gray2,
    },
  })
);

interface DropdownInputProps extends Omit<SelectProps, "variant"> {
  label?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  inputSx?: SxProps<Theme>;
  backgroundColor?: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  helperText,
  options,
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
      <StyledSelect
        variant="outlined"
        IconComponent={ExpandMoreIcon}
        sx={inputSx}
        backgroundColor={backgroundColor}
        displayEmpty
        renderValue={(value: any) => {
          if (!value) {
            return <P2 text={props.placeholder ?? ''} color={Colors.gray4} />;
          }
          const selectedOption = options.find(option => option.value === value);
          return selectedOption ? selectedOption.label : value;
        }}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && (
        <Typography
          variant="caption"
          component="p"
          sx={{
            color: props.error ? Colors.error : "text.secondary",
            fontSize: "13px",
            mt: "3px"
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default DropdownInput;
