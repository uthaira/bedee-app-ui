import { Box, IconButton, Modal, Stack, styled } from '@mui/material';
import { BdPrimaryButton, BdSecondaryButton } from '../button';
import { Colors } from '../../colors';
import { BaseText, P1 } from '../font';
import React from 'react';

interface CustomConfirmModalProps {
  title: string;
  message?: string;
  content?: React.ReactNode;
  isVisible: boolean;
  isCloseIcon?: boolean;
  handleClose?: () => void;
  handleClickPrimary?: () => void;
  handleClickSecondary?: () => void;
  textPrimaryButton?: string;
  textSecondaryButton?: string;
  image?: React.ReactNode;
  padding?: string;
  button?: React.ReactNode;
}

const CustomConfirmModal = ({
  title,
  message,
  content,
  isVisible,
  isCloseIcon,
  handleClose,
  handleClickPrimary,
  handleClickSecondary,
  textPrimaryButton,
  textSecondaryButton,
  image,
  button,
  padding = '64px 16px 16px 16px',
}: CustomConfirmModalProps) => {
  return (
    <Modal open={isVisible} onClose={handleClose}>
      <ModalStyledBox padding={padding}>
        {isCloseIcon && (
          <XCloseButtonStyled onClick={handleClose}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 4L4 12M4 4L12 12'
                stroke='#323A43'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </XCloseButtonStyled>
        )}
        <Stack width='100%' alignItems='center'>
          {image && (
            <Box display='flex' justifyContent='center'>
              {image}
            </Box>
          )}
          <ModalContent title={title} message={message} content={content} />
          {button ? (
            button
          ) : (
            <Stack gap={1} width='100%' mt={5}>
              {textPrimaryButton && (
                <BdPrimaryButton
                  onClick={handleClickPrimary}
                  text={textPrimaryButton}
                  bdSize='lg'
                />
              )}
              {textSecondaryButton && (
                <BdSecondaryButton
                  onClick={handleClickSecondary}
                  text={textSecondaryButton}
                  bdSize='lg'
                />
              )}
            </Stack>
          )}
        </Stack>
      </ModalStyledBox>
    </Modal>
  );
};

interface ContentProps {
  title: string;
  message?: string;
  content?: React.ReactNode;
}

const ModalContent = ({ title, message, content }: ContentProps) => (
  <Stack gap={1} width='100%' alignItems='center'>
    <TitleTextStyled text={title} sx={{ whiteSpace: 'pre-line' }} />
    {content ? (
      <Box width='100%'>{content}</Box>
    ) : (
      message && (
        <DescriptionTextStyled text={message} sx={{ whiteSpace: 'pre-line' }} />
      )
    )}
  </Stack>
);

export default CustomConfirmModal;

const ModalStyledBox = styled(Stack)<{ padding: string }>(({ padding }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: Colors.white,
  minWidth: '320px',
  maxWidth: '90vw',
  alignItems: 'center',
  padding: padding,
  borderRadius: '12px',
  outline: 'none',
  '&:focus-visible': {
    outline: 'none',
  },
}));

const TitleTextStyled = styled(BaseText)(() => ({
  color: '#3A4248',
  textAlign: 'center',
  fontSize: '27px',
  fontWeight: '600',
}));

const DescriptionTextStyled = styled(P1)(() => ({
  color: '#4A5568',
  display: 'flex',
  textAlign: 'center',
  whiteSpace: 'pre-line',
}));

const XCloseButtonStyled = styled(IconButton)(() => ({
  position: 'absolute',
  borderRadius: '50%',
  width: 32,
  height: 32,
  minWidth: 0,
  padding: 0,
  top: 16,
  right: 16,
  backgroundColor: '#EAEEF6',
  color: '#323A43',
  '&:hover': {
    backgroundColor: 'rgba(234, 238, 246, 0.7)',
  },
}));
