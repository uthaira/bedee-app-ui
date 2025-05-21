import React from 'react';
import { Modal, Box } from '@mui/material';
import { Colors } from '../../colors';
import { CheckIcon } from '../../icons';
import { Lead2 } from '../font';

interface SuccessWidgetProps {
  open: boolean;
  message?: string;
}

const SuccessWidget: React.FC<SuccessWidgetProps> = ({ open, message = '' }) => {
  return (
    <Modal
      open={open}
      aria-labelledby='success-modal-title'
      aria-describedby='success-modal-description'
      closeAfterTransition
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          outline: 'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.gray7,
            borderRadius: 3,
            padding: 4,
            boxShadow: 24,
          }}
        >
          <CheckIcon size={3} color={Colors.white} />
          { message && <Lead2 text={message} color={Colors.white} />}
        </Box>
      </Box>
    </Modal>
  );
};

export default SuccessWidget;
