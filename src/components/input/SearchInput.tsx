import { IconButton, InputBase, Paper, styled } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { Colors } from '../../colors';
import { CloseIcon, SearchIcon } from '../../icons';

interface ISearchProps {
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (val: string) => void;
  onKeyDown?: (event: any) => void
  autoFocus?: boolean;
}

const SearchInput: React.FC<ISearchProps> = (props: ISearchProps) => {
  const {
    placeholder,
    readOnly = false,
    autoFocus = false,
    value = '',
    onChange = () => {},
    onKeyDown = () => {}
  } = props;

  const onClear = () => {
    onChange('');
  };

  const onValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const val = evt.target.value;
      onChange(val);
    }
  };

  return (
    <Paper
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '48px',
        boxShadow: 'none',
        borderRadius: '8px',
        border: `1px solid ${Colors.gray2}`,
        backgroundColor: Colors.white,
        paddingRight: '12px',
        paddingLeft: '12px',
      }}
    >
      <IconButton type='button' aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '14px', color: Colors.gray6 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
        readOnly={readOnly}
        value={value}
        onChange={onValue}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
      />
      {value && (
        <XCloseButtonStyled onClick={onClear}>
          <CloseIcon color={Colors.gray6} />
        </XCloseButtonStyled>
      )}
    </Paper>
  );
};

export default SearchInput;

const XCloseButtonStyled = styled(IconButton)(() => ({
  borderRadius: '50%',
  backgroundColor: Colors.gray2,
  color: Colors.gray6,
}));
