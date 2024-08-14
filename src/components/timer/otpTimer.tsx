import { Colors } from "../../colors";
import { Lead1 } from "../font";

type TimerProps = {
  timerResend: number;
};

const OtpTimer = (props: TimerProps) => {
  const { timerResend } = props;
  const minutes = Math.floor(timerResend / 60);
  const seconds = Math.floor(timerResend % 60);

  const to2Digits = (val: number) => {
    return `${val}`.padStart(2, '0');
  };

  return (
    <Lead1
      text={`${to2Digits(minutes)}:${to2Digits(seconds)}`}
      color={Colors.royalBlue}
    />
  );
};

export default OtpTimer;
