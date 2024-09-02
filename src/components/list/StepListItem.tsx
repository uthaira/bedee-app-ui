import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Colors } from '../../colors';

interface StepListItemProps {
  number: number;
  text: string;
  stepCircleColor?: string;
  stepTextColor?: string;
  stepConnectorColor?: string;
  textColor?: string;
}

const StepListItemWrapper = styled(Box)<{ stepConnectorColor: string }>(({ stepConnectorColor, theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  marginBottom: theme.spacing(2),

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '13px',
    top: '32px',
    width: '5px',
    height: `calc(100% + ${theme.spacing(2)})`,
    backgroundColor: stepConnectorColor,
  },

  '&:last-child::after': {
    display: 'none',
  },
}));

const StepNumber = styled(Box)<{ stepCircleColor: string, stepTextColor: string }>(({ stepCircleColor, stepTextColor, theme }) => ({
  minWidth: '32px',
  height: '32px',
  borderRadius: '50%',
  background: stepCircleColor,
  color: stepTextColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  fontWeight: 'bold',
  fontSize: '18px',
  zIndex: 1,
  flexShrink: 0,
}));

const StepText = styled(Typography)<{ textColor: string }>(({ textColor, theme }) => ({
  fontSize: '16px',
  lineHeight: 1.5,
  margin: 0,
  color: textColor,
}));

const StepListItem: React.FC<StepListItemProps> = ({
  number,
  text,
  stepTextColor = Colors.brandBlack,
  stepCircleColor = `linear-gradient(180deg, #B8CAF6 0%, #E5EDFF 100%)`,
  stepConnectorColor = Colors.gray2,
  textColor = Colors.brandBlack,
}) => {
  return (
    <StepListItemWrapper stepConnectorColor={stepConnectorColor}>
      <StepNumber
        stepCircleColor={stepCircleColor}
        stepTextColor={stepTextColor}
      >
        {number}
      </StepNumber>
      <StepText textColor={textColor}>{text}</StepText>
    </StepListItemWrapper>
  );
};

export default StepListItem;