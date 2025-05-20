import React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import { Colors } from '../../colors';

interface OptionsProps {
  id: string;
  title: string;
}

interface DialogModalProps {
  open: boolean;
  onClose: () => void;
  onSelectOption: (option: string) => void;
  options?: OptionsProps[];
  hasCancelButton?: boolean;
  cancelText?: string
}

const DialogModal: React.FC<DialogModalProps> = ({
  open,
  onClose,
  onSelectOption,
  options = [],
  hasCancelButton = false,
  cancelText = 'Cancel'
}) => {
  const handleListItemClick = (option: string) => {
    onSelectOption(option);
    onClose();
  };

  const handleClose = () => {
    onClose();
  }

  return (
    <StyledDialog
      onClose={onClose}
      open={open}
      PaperProps={{
        elevation: 0,
        sx: {
          border: "solid 1px gray",
          bgcolor: 'transparent',
          outline: 'none',
        }
      }}
    >
      <StyledList>
        {options.map((option, index) => (
          <React.Fragment key={option.id}>
            <ListItem
              alignItems="center"
              sx={{ padding: '4px' }}
              onClick={() => handleListItemClick(option.id)} key={option.id}
            >
              <ListItemText sx={{ textAlign: 'center' }} primary={option.title} />
            </ListItem>
            {index + 1 < options.length && (
              <Divider component="li" />
            )}
          </React.Fragment>
        ))}
      </StyledList>

      {hasCancelButton && (
        <StyledList sx={{ marginTop: '24px' }}>
          <ListItem
            alignItems="center"
            sx={{ padding: '4px' }}
            onClick={() => handleClose()}
          >
            <ListItemText sx={{ textAlign: 'center' }} primary={cancelText} />
          </ListItem>
        </StyledList>
      )}
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  & .MuiDialog-container {
    display: flex;
    align-items: flex-end;
    padding-bottom: 16px;
    width: 100%;
  }

  & .MuiPaper-root {
    width: 100%;
    margin: 0 16px;
  }
`;

const StyledList = styled(List)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  backgroundColor: Colors.white,
  borderRadius: '8px',
}));

export default DialogModal;