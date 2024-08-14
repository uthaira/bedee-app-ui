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
  } = props;

  return (
    <Phone>
      <MobileInput
        name=''
        type='tel'
        label={placeholder}
        value={mobile}
        onChange={onChangeMobile}
        isNumber
        invalid={isInvalid}
        rightComponent={
          <Box margin='6px 0 6px -10px'>
            <InternationalPhone
              countryList={countryList}
              onChange={onChangeCountry}
              defaultCountry={defaultCountry}
            />
          </Box>
        }
        containerStyled={{
          background: 'none',
        }}
        inputStyled={{
          background: 'none',
        }}
      />
    </Phone>
  );
};

const Phone = styled('div')`
  width: 100%;
`;

export default PhoneNoForm;
