import React, { useMemo } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Colors } from '../../colors';

interface LoadingWidgetProps {
  open: boolean;
}

const LoadingWidget: React.FC<LoadingWidgetProps> = (props) => {
  const { open } = props;
  return (
    <Modal
      open={open}
      aria-labelledby='loading-modal-title'
      aria-describedby='loading-modal-description'
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
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.gray7,
            borderRadius: 3,
            padding: 4,
            boxShadow: 24,
          }}
        >
          <CircularProgress sx={{ color: Colors.white }} />
        </Box>
      </Box>
    </Modal>
  );
};

export default LoadingWidget;
