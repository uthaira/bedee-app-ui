import React, { useState, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { Format } from '../../utils';
import { Colors } from '../../colors';

interface InputProps {
  name: string;
  label: string;
  value?: string;
  tag?: string;
  disabled?: boolean;
  pattern?: string;
  charPattern?: string;
  isNumber?: boolean;
  limit?: number;
  onChange?: (value: string, name: string, tag?: string) => void;
  invalid?: boolean;
  type?: string;
  containerStyled?: React.CSSProperties;
  inputStyled?: React.CSSProperties;
  rightComponent?: React.ReactNode;
}

const MobileInput: React.FC<InputProps> = ({
  name,
  label,
  value = '',
  tag,
  disabled = false,
  pattern,
  charPattern,
  isNumber,
  limit = 900000,
  onChange = () => { },
  invalid,
  type = 'text',
  containerStyled,
  inputStyled,
  rightComponent,
}) => {
  const [isActive, setActive] = useState(false);

  const onActive = () => setActive(true);
  const onInactive = () => setActive(false);
  const onValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      let val = evt.target.value;
      if (pattern) {
        val = Format.clearPattern(val, charPattern);
      }

      if (isNumber && val !== '') {
        const tmp = +val;
        val = tmp === 0 || tmp ? val : value;
      }

      if (val.length <= limit) {
        onChange(val, name, tag);
      }
    }
  };

  const text = pattern ? Format.toPattern(value, pattern) : value + '';
  const invalidCss = invalid ? ' invalid' : '';
  const activeCss = isActive ? ' active' : '';
  const disableCss = disabled ? ' disabled' : '';

  return (
    <Content
      className={`${invalidCss}${activeCss}${disableCss}`}
      style={containerStyled}
    >
      {rightComponent}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        id={name}
        className={`${invalidCss}${activeCss}${disableCss}`}
        placeholder={label}
        type={type}
        autoComplete='off'
        required
        disabled={disabled}
        value={text}
        onChange={onValue}
        onFocus={onActive}
        onBlur={onInactive}
        style={inputStyled}
      />
      <Invalid>{invalid || ''} </Invalid>
    </Content>
  );
};

const Content = styled('div')({
  width: '100%',
  height: '56px',
  backgroundColor: '#f7f8f9',
  borderRadius: '8px',
  padding: '0px 10px',
  border: `1px solid ${Colors.gray2}`,
  display: 'flex',

  '&.active': {
    border: `1px solid ${Colors.primary001}`,
  },

  '&.disabled': {
    backgroundColor: `${Colors.gray3}`,
  },

  '&.invalid': {
    border: `1px solid ${Colors.error}`,
  },
});

const Invalid = styled('div')`
  color: #f95247;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  display: none;

  &.invalid {
    display: block;
  }
`;

export default MobileInput;
