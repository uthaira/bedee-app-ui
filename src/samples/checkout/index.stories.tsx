import { Meta } from '@storybook/react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { PaymentMethod, ProviderSection } from '../../checkout'
import { useState } from 'react';
import { EPaymentMethod } from '../../checkout/PaymentMethod';

export const SampleCheckout = () => {

  const [paymentType, setPaymentType] = useState(EPaymentMethod.promptpay);
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
        <ProviderSection
          title="ปรึกษาออนไลน์"
          fullName='นพ. อภิสรรค์ จินานุวัฒนา'
          positionName='ปรึกษาครอบครัว'
          consultationTime={20}
          netConsultationFee={200}
          photo='https://dev-api.bdms.tech/doctor-profile/public/file/photo/b4a3e070-5726-4253-8857-ef33448f20b4'
          unitMins='นาที'
        />
      </Item>
      <Item>
        <PaymentMethod currentPaymentType={paymentType} onSelected={setPaymentType} withAlert
          paymentsOption={[
            {
              title: 'QR พร้อมเพย์',
              value: EPaymentMethod.promptpay,
              image: <img src={'/images/thaiqrcode.png'} alt='Thaiqrcode' height={32} />,
            },
            {
              title: 'บัตรเครดิต / เดบิต',
              value: EPaymentMethod.creditCard,
              image: <img src={'/images/creditcard.png'} alt='Thaiqrcode' height={18} />,
            }
          ]}
        />
      </Item>
    </Box>
  )
}

export default {
  title: 'Sample/Checkout',
  component: SampleCheckout,
} as Meta<typeof SampleCheckout>

const Item = styled('div')`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;