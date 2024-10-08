import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../colors";
import { Lead1, P1, P2 } from "../font";
import { OtpTimer } from "../timer";
import OutlinedBtn from "../button/OutlinedBtn";
import OtpInput from "../input/OtpInput";

interface OtpFormProps {
  length: number;
  value: string;
  refcode: string;
  onChange: (val: string) => void;
  onResend: () => void;
  errorMessage?: string;
  refcodeLabel?: string;
  resendLabel?: string;
  unitLabel?: string;
  resendBtnText?: string;
  timeRemain: number;
  isInvalid?: boolean;
  turnstileComponent?: React.ReactNode
}

const OtpForm: React.FC<OtpFormProps> = (props) => {
  const {
    length,
    value,
    onChange,
    errorMessage = "",
    refcode,
    refcodeLabel = "หมายเลขอ้างอิง",
    resendLabel = "ขอรหัสอีกครั้งใน",
    unitLabel = "นาที",
    onResend,
    resendBtnText = "ขอรหัสอีกครั้ง",
    timeRemain = 0,
    isInvalid = false,
    turnstileComponent
  } = props;

  const renderResendTimer = () => {
    if (timeRemain > 0) {
      return (
        <StyledTimmer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <P1 text={resendLabel} />
            <OtpTimer timerResend={timeRemain} />
            <Lead1 text={unitLabel} color={Colors.royalBlue} />
          </Box>
        </StyledTimmer>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <OutlinedBtn bdSize="md" onClick={onResend} text={resendBtnText} width="fit" />
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <OtpInput value={value} onChange={onChange} length={length} isInvalid={isInvalid} />
        {errorMessage && (
          <StyledTextError>
            <P2 text={errorMessage} color={Colors.error} />
          </StyledTextError>
        )}
      </Box>
      {turnstileComponent}
      <StyledRefCode>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <P2 text={refcodeLabel} />
          <P2 text={refcode} />
        </Box>
      </StyledRefCode>
      {renderResendTimer()}
    </Box>
  );
};

const StyledTextError = styled("div")`
  margin-top: 12px;
  text-align: center;
`;

const StyledRefCode = styled("div")`
  margin-top: 48px;
  text-align: center;
`;

const StyledTimmer = styled("div")`
  text-align: center;
`;

export default OtpForm;
