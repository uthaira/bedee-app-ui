import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import InternationalPhone, { ICountriesPhone } from '../input/InternationalPhone';
import MobileInput from '../input/MobileInput';

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
    onBlur
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
        rightComponent={
          <Box margin='6px 0 6px -10px'>
            <InternationalPhone
              countryList={countryList}
              onChange={onChangeCountry}
              defaultCountry={defaultCountry}
              inputStyled={{
                fontSize: fontSize ?? '16px',
              }}
            />
          </Box>
        }
        containerStyled={{
          background: 'none',
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
