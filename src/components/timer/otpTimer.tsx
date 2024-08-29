import { Colors } from "../../colors";
import { Format } from "../../utils";
import { Lead1 } from "../font";

type TimerProps = {
  timerResend: number;
};

const OtpTimer = (props: TimerProps) => {
  const { timerResend } = props;
  const minutes = Math.floor(timerResend / 60);
  const seconds = Math.floor(timerResend % 60);

  return (
    <Lead1
      text={`${Format.to2Digits(minutes)}:${Format.to2Digits(seconds)}`}
      color={Colors.royalBlue}
    />
  );
};

export default OtpTimer;
