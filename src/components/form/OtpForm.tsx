import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { OtpInput } from '../input';
import { Colors } from '../../colors';
import { Lead1, P1, P2 } from '../font';
import { OtpTimer } from '../timer';
import OutlinedBtn from '../button/OutlinedBtn';

interface OtpFormProps {
  length: number;
  value: string;
  refcode: string
  onChange: (val: string) => void;
  onResend: () => void;
  errorMessage?: string
  refcodeLabel?: string
  resendTimeSecond?: number
  expireTimeSecond?: number
  resendLabel?: string
  unitLabel?: string
  resendBtnText?: string
}

const OtpForm: React.FC<OtpFormProps> = (props) => {
  const { length, value, onChange, errorMessage = '', refcode, refcodeLabel = 'หมายเลขอ้างอิง', resendLabel = 'ขอรหัสอีกครั้งใน', unitLabel = 'นาที', resendTimeSecond = 180, expireTimeSecond = 180, onResend, resendBtnText = 'ขอรหัสอีกครั้ง' } = props;
  const [delayResend, setDelayResend] = useState(resendTimeSecond);
  const [timerExpire, setTimerExpire] = useState(expireTimeSecond);


  useEffect(() => {
    const timerTimerExpire = setInterval(() => {
      setTimerExpire(timerExpire - 1);
    }, 1000);

    const timerDelayResend = setInterval(() => {
      setDelayResend(delayResend - 1);
    }, 1000);

    if (delayResend === 0) {
      clearInterval(timerDelayResend);
    }

    if (timerExpire === 0) {
      clearInterval(timerTimerExpire);
    }

    return () => {
      clearInterval(timerDelayResend);
      clearInterval(timerTimerExpire);
    };
  });


  const renderResendTimer = () => {
    if (delayResend > 0) {
      return (
        <StyledTimmer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <P1 text={resendLabel} />
            <OtpTimer timerResend={delayResend} />
            <Lead1 text={unitLabel} color={Colors.royalBlue} />
          </Box>
        </StyledTimmer>
      );
    } else {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <OtpInput value={value} onChange={onChange} length={length} />
        {errorMessage && (
          <StyledTextError>
            <P2 text={errorMessage} color={Colors.error} />
          </StyledTextError>
        )}
      </Box>
      <StyledRefCode>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
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

const StyledTextError = styled('div')`
  margin-top: 12px;
  text-align: center;
`;

const StyledRefCode = styled('div')`
  margin-top: 48px;
  text-align: center;
`;

const StyledTimmer = styled('div')`
  text-align: center;
`;

export default OtpForm;
