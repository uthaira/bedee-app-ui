import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import InternationalPhone, { ICountriesPhone } from '../input/InternationalPhone';
import MobileInput from '../input/MobileInput';
import { Colors } from '../../colors';

interface PhoneNoFormProps {
  countryList: ICountriesPhone[];
  mobile: string;
  onChangeCountry: (selectedCountry: ICountriesPhone) => void;
  onChangeMobile: (mobile: string) => void;
  isInvalid?: boolean;
  placeholder?: string;
  defaultCountry?: ICountriesPhone;
  fontSize?: string;
  onBlur?: (value: string, name: string, tag?: string) => void;
  disabled?: boolean;
}

const PhoneNoForm: React.FC<PhoneNoFormProps> = (props: PhoneNoFormProps) => {
  const {
    countryList,
    onChangeCountry,
    onChangeMobile,
    isInvalid,
    mobile,
    placeholder = '',
    defaultCountry,
    fontSize,
    onBlur,
    disabled = false,
  } = props;

  return (
    <Phone>
      <MobileInput
        name=''
        type='tel'
        label={placeholder}
        value={mobile}
        onChange={onChangeMobile}
        onBlur={onBlur}
        isNumber
        invalid={isInvalid}
        disabled={disabled}
        rightComponent={
          <Box margin='6px 0 6px -10px'>
            <InternationalPhone
              countryList={countryList}
              onChange={onChangeCountry}
              defaultCountry={defaultCountry}
              inputStyled={{
                fontSize: fontSize ?? '16px',
              }}
              disabled={disabled}
            />
          </Box>
        }
        containerStyled={{
          background: disabled ? Colors.gray2 :  'none',
          color: disabled ? 'rgba(0,0,0,0.38)' : 'unset'
        }}
        inputStyled={{
          background: 'none',
          fontSize: fontSize ?? '16px',
        }}
      />
    </Phone>
  );
};

const Phone = styled('div')`
  width: 100%;
`;

export default PhoneNoForm;
