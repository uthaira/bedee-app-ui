import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Colors } from '../../colors';

interface SelectionCardProps {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
  onClick?: () => void;
  textColor?: string;
  textActiveColor?: string;
  borderColor?: string;
  borderActiveColor?: string;
  backgroundColor?: string;
  backgroundActiveColor?: string;
}

const CardWrapper = styled(Box)<{
  selected: boolean,
  borderColor: string,
  borderActiveColor: string,
  backgroundColor: string,
  backgroundActiveColor: string,
}>(({ selected, borderColor, borderActiveColor, backgroundColor, backgroundActiveColor, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '16px',
  border: `2px solid ${selected ? borderActiveColor : borderColor}`,
  backgroundColor: selected ? backgroundActiveColor : backgroundColor,
  cursor: 'pointer',
  transition: 'border-color 0.3s, background-color 0.3s',
  '&:hover': {
    borderColor: borderActiveColor,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '90px',
  maxHeight: '50px',
}));

const SelectionCard: React.FC<SelectionCardProps> = ({
  icon,
  title,
  textColor = Colors.gray7,
  textActiveColor = Colors.primary007,
  borderColor = Colors.gray4,
  borderActiveColor = Colors.primary007,
  backgroundColor = Colors.white,
  backgroundActiveColor = Colors.white,
  selected = false,
  onClick,
}) => {
  return (
    <CardWrapper
      selected={selected}
      borderColor={borderColor}
      borderActiveColor={borderActiveColor}
      backgroundColor={backgroundColor}
      backgroundActiveColor={backgroundActiveColor}
      onClick={onClick}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          '&:hover': { color: textActiveColor },
        }}
        color={selected ? textActiveColor : textColor}
      >
        {title}
      </Typography>
    </CardWrapper>
  );
};

export default SelectionCard;