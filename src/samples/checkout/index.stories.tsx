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
          fullName='นพ. ทดสอบ1 ทดสอบ2'
          positionName='ปรึกษาครอบครัว'
          consultationTime={20}
          netConsultationFee={200}
          photo='https://www.bdms.co.th/images/logo.png'
          unitMins='นาที'
        />
      </Item>
      <Item>
        <PaymentMethod currentPaymentType={paymentType} onSelected={setPaymentType} withAlert
          paymentsOption={[
            {
              title: 'QR พร้อมเพย์',
              value: EPaymentMethod.promptpay,
            },
            {
              title: 'บัตรเครดิต / เดบิต',
              value: EPaymentMethod.creditCard,
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