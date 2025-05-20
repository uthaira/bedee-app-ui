import React from 'react';
import Box from '@mui/material/Box'
import StepItem from './StepListItem';
import { Colors } from '../../colors';


interface StepListProps {
  steps?: string[];
  stepTextColor?: string;
  stepCircleColor?: string;
  stepConnectorColor?: string;
  textColor?: string;
}
  
const StepList: React.FC<StepListProps> = ({
  steps = [],
  stepTextColor = Colors.brandBlack,
  stepCircleColor = 'linear-gradient(180deg, #B8CAF6 0%, #E5EDFF 100%)',
  stepConnectorColor = '#EAEEF6',
  textColor = Colors.brandBlack,
}) => {
  return (
    <Box>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          number={index + 1}
          text={step}
          textColor={textColor}
          stepTextColor={stepTextColor}
          stepCircleColor={stepCircleColor}
          stepConnectorColor={stepConnectorColor}
        />
      ))}
    </Box>
  );
};

export default StepList;