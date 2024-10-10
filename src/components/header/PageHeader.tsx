import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../../colors';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import { H6 } from '../font';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  elevated?: boolean;
  fixed?: boolean;
  bgColor?: string;
  color?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBack,
  elevated = false,
  fixed = false,
  bgColor = Colors.white,
  color = Colors.gray7,
}) => {
  return (
    <PageHeaderContainer
      elevated={elevated}
      fixed={fixed}
      sx={{ backgroundColor: bgColor }}
    >
      {onBack && (
        <IconButtonLeft onClick={onBack}>
          <ArrowLeftIcon color={color} />
        </IconButtonLeft>
      )}
      <PageHeaderTitleWrapper>
        <H6 text={title} color={color} />
      </PageHeaderTitleWrapper>
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'elevated' && prop !== 'fixed',
})<{ elevated: boolean; fixed: boolean }>(({ theme, elevated, fixed }) => ({
  position: fixed ? 'fixed' : 'relative',
  top: 0,
  left: 0,
  zIndex: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  background: Colors.white,
  height: '56px',
  boxShadow: elevated ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'box-shadow 0.3s ease',
}));

const PageHeaderTitleWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  zIndex: 1,
}));

const IconButtonLeft = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1),
  zIndex: 2,
}));

export default PageHeader;