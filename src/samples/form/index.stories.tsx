import { useState } from 'react'
import { Meta } from '@storybook/react'
import PhoneNumberForm from '../../components/form/PhoneNumberForm'
import { COUNTRY_LIST, DEFAULT_COUNTRY_PHONE } from '../../constanst/mockData'
import { Box } from '@mui/material'
import OtpForm from '../../components/form/OtpForm'
import { P1 } from '../../components'
import styled from '@emotion/styled'
import PinForm from '../../components/form/PinForm'

export const SamplePhoneNumberForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY_PHONE);
  const [codeList, setCodeList] = useState(['', '', '', '', '', '']);

  const onChangeMobile = (val: string) => {
    setMobile(val);
    setIsInvalid(false);
  };

  const onChangeCountry = (item: any) => {
    setSelectedCountry(item);
  };

  const index = codeList.findIndex((it) => it === '');
  const onKeyboard = (val: string) => {
    if (index === -1) return;

    const len = codeList.length;
    if (index < len) {
      codeList[index] = val;
      setCodeList([...codeList]);
    }

    if (index === len - 1) {
      //TODO handle submit
    }
  };

  const onDelete = () => {
    const i = index === -1 ? codeList.length - 1 : index - 1;
    if (i >= 0) {
      codeList[i] = '';
      setCodeList([...codeList]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        gap: 0,
        flexDirection: 'column'
      }}
    >
      <Item>
        <P1 text='Phone Number Form Component' />
        <PhoneNumberForm
          countryList={COUNTRY_LIST}
          mobile={mobile}
          isInvalid={isInvalid}
          placeholder='ระบุหมายเลขโทรศัพท์'
          defaultCountry={selectedCountry}
          onChangeCountry={onChangeCountry}
          onChangeMobile={onChangeMobile}
        />
      </Item>
      <Item>
        <P1 text='OTP Form Component' />
        <OtpForm
          length={4}
          onChange={(val) => setOtp(val)}
          refcode='1EC2'
          value={otp}
          onResend={() => {}}
        />
      </Item>
      <Item>
        <P1 text='Pin Form Component' />
        <PinForm
          codeList={codeList}
          onKeyboard={onKeyboard}
          onDelete={onDelete}
        />
      </Item>
    </Box>
  )
}

export default {
  title: 'Sample/Form',
  component: SamplePhoneNumberForm,
} as Meta<typeof SamplePhoneNumberForm>

const Item = styled('div')`
  width: 100%;
  padding: 50px 0;
  border-bottom: 1px solid #eee;
`;