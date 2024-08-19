import React, { useState } from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Box,
  SxProps,
  Theme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../colors";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "start",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  border: "none",
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: 1,
  margin: theme.spacing(0.5),
  border: `1px solid ${Colors.gray2}`,
  borderRadius: "27.26px",
  color: Colors.gray7,
  position: "relative",
  "&.MuiToggleButtonGroup-grouped": {
    borderRadius: "27.26px",
    border: `1px solid ${Colors.gray2}`,
  },
  "&.Mui-selected": {
    backgroundColor: Colors.primary001,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.primary001,
    },
  },
}));

interface Option {
  value: string;
  label: React.ReactNode;
}

interface SelectionGroupInputProps {
  name: string;
  options: Option[];
  label?: string;
  exclusive?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  sx?: SxProps<Theme>;
}

const SelectionGroupInput: React.FC<SelectionGroupInputProps> = ({
  name,
  options = [],
  label,
  exclusive = true,
  value: propValue,
  onChange: propOnChange,
  sx = {},
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(propValue || "");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    setSelectedValue(newValue);
    propOnChange?.(newValue);
  };

  return (
    <Box sx={sx}>
      {label && (
        <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>
          {label}
        </Typography>
      )}
      <StyledToggleButtonGroup
        value={selectedValue}
        exclusive={exclusive}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <StyledToggleButton key={option.value} value={option.value}>
            {option.label}
          </StyledToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default SelectionGroupInput;