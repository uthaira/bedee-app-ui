import React from 'react';
import { Box, styled } from '@mui/material';

type Variant = 'default' | 'outlined';

export type BadgeProps = {
  color: string;
  icon?: React.ReactNode;
  text: React.ReactNode;
  variant?: Variant;
};

const BadgeContainer = styled(Box)<{ color: string; variant: Variant }>(({ theme, color, variant }) => ({
  backgroundColor: variant === 'default' ? color : 'transparent',
  color: theme.palette.common.white,
  borderRadius: '4px',
  padding: theme.spacing(0.5, 0.75),
  display: 'inline-flex',
  alignItems: 'center',
  border: variant === 'outlined' ? `1px solid ${color}` : 'none',
}));

const Badge = ({ color, icon, text, variant = 'default' }: BadgeProps) => {
  return (
    <BadgeContainer color={color} variant={variant}>
      {icon && <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '4px' }}>{icon}</Box>}
      {text}
    </BadgeContainer>
  );
};

export default Badge;
