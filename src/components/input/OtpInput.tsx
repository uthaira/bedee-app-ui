import { TextField, Box, styled } from "@mui/material";
import * as React from "react";
import { Colors } from "../../colors";
interface IOTP {
  length: number;
  value: string;
  onChange: (val: string) => void;
  isInvalid: boolean;
}

const OtpInput = (props: IOTP) => {
  const { length, value, onChange, isInvalid = false } = props;

  const inputRefs = React.useRef<Array<HTMLInputElement | null>>(new Array<null>(length).fill(null));

  const focusInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput?.focus();
  };

  const selectInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput?.select();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
        event.preventDefault();
        const newOtpDelete = value.slice(0, currentIndex) + value.slice(currentIndex + 1);
        onChange(newOtpDelete);
        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        const newOtpBackspace = value.slice(0, currentIndex) + value.slice(currentIndex + 1);
        onChange(newOtpBackspace);
        break;
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
    const currentValue = event.target.value.replace(/\D/g, "");
    if (currentValue.length === 0) return;

    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter] && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }

    const otpArray = value.split("");
    const lastValue = currentValue[currentValue.length - 1];
    otpArray[indexToEnter] = lastValue;
    const newOtp = otpArray.join("");
    onChange(newOtp);

    if (currentValue !== "" && currentIndex < length - 1) {
      focusInput(currentIndex + 1);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>, currentIndex: number) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, currentIndex: number) => {
    event.preventDefault();
    const { clipboardData } = event;

    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter] && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let iteration = indexToEnter; iteration < length; iteration += 1) {
        const lastValue = pastedText[iteration - indexToEnter];
        otpArray[iteration] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <CustomTextField
            inputRef={(ele) => {
              inputRefs.current[index] = ele;
            }}
            inputProps={{
              style: { textAlign: "center", color: Colors.formTextActive },
              placeholder: "-",
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(event, index)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, index)}
            onClick={(event: React.MouseEvent<HTMLInputElement>) => handleClick(event, index)}
            onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => handlePaste(event, index)}
            value={value[index] ?? '-'}
            type="number"
            hasValue={Boolean(value[index])}
            isInvalid={isInvalid}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

const CustomTextField = styled(TextField)(({ hasValue, isInvalid }: { hasValue: boolean; isInvalid: boolean }) => ({
  "& input[type=number]": {
    MozAppearance: "textfield", // For Firefox
  },
  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none", // For Chrome, Safari, Edge
    margin: 0,
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "28px",
    textAlign: "center",
    "&::placeholder": {
      color: Colors.gray7,
      opacity: 1,
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: isInvalid ? Colors.error : hasValue ? Colors.formBorderActive : Colors.formBorder,
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      borderColor: isInvalid ? Colors.error : hasValue ? Colors.formBorderActive : Colors.formBorder,
    },
    "&.Mui-focused fieldset": {
      borderColor: isInvalid ? Colors.error : Colors.formBorderActive,
    },
  },
}));

export default OtpInput;
