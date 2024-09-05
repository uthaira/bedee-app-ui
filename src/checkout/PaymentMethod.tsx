import { Box, Radio, Stack, styled } from '@mui/material';
import {
  Alert,
  AlertStyle,
  AlertType,
  H6,
  Lead2,
} from '../components';
import React from 'react';
import { PaymentIcon } from '../icons';
import { Colors } from '../colors';

export enum EPaymentMethod {
  promptpay = 'qr_code',
  creditCard = 'credit_debit_card',
  couponApplied = 'coupon_applied',
  zeroAmount = 'zero_amount',
  invoice = 'invoice',
  insurance = 'insurance',
}

interface PaymentMethodProps {
  onSelected?: (paymentType: EPaymentMethod) => void;
  allowPaymentOptions?: EPaymentMethod[]
  currentPaymentType?: EPaymentMethod;
  title?: string;
  hideTitle?: boolean;
  promptpayLabel?: string;
  creditCardLabel?: string;
  alertText?: string;
  withAlert?: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = (props) => {
  const {
    title = 'วิธีชำระเงิน',
    promptpayLabel = 'QR พร้อมเพย์',
    creditCardLabel = 'บัตรเครดิต / เดบิต',
    alertText = 'กรุณาทำรายการต่อ เพื่อยืนยันการรับคำปรึกษาภายใน 10 นาที',
    allowPaymentOptions = [EPaymentMethod.promptpay, EPaymentMethod.creditCard],
    onSelected,
    currentPaymentType,
    withAlert = false,
    hideTitle = false,
  } = props;
  const disabledSelect = !onSelected;

  const getPaymentTypeOptions = (paymentType: EPaymentMethod) => {
    switch (paymentType) {
      case EPaymentMethod.promptpay:
        return {
          title: promptpayLabel,
          value: EPaymentMethod.promptpay,
          image: <img src={'/images/thaiqrcode.png'} alt='Thaiqrcode' height={32} />,
        };
      case EPaymentMethod.creditCard:
        return {
          title: creditCardLabel,
          value: EPaymentMethod.creditCard,
          image: <img src={'/images/creditcard.png'} alt='Credit Card' height={18} />,
        };
      default:
        return null;
    }
  };

  const paymentMethod = (paymentType: EPaymentMethod) => {
    const paymentData = getPaymentTypeOptions(paymentType);
    if (!paymentData) return;
    const isSelected = paymentType === currentPaymentType;
    return (
      <PaymentMethodItem
        onClick={() => !disabledSelect && onSelected(paymentType)}
        className={isSelected ? 'selected' : ''}
        style={{ cursor: disabledSelect ? 'auto' : 'pointer' }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' alignItems='center'>
            <Radio
              checked={isSelected}
              onChange={() => ''}
              value={paymentData.value}
              name='radio-buttons'
            />
            <Lead2 text={paymentData.title} />
          </Stack>
          {paymentData.image && paymentData.image}
        </Box>
      </PaymentMethodItem>
    );
  };

  return (
    <ContentWrapper>
      {
        !hideTitle && (
          <Stack direction='row' alignItems='center' gap={'12px'}>
            <PaymentIcon />
            <H6 text={title} />
          </Stack>
        )
      }
      <PaymentMethodWrapper>
        <Stack direction='column' alignItems='start' gap={'12px'}>
          {allowPaymentOptions.map((type: any) => paymentMethod(type))}
          {withAlert && (
            <Warning>
              <Alert
                text={alertText}
                type={AlertType.Info}
                style={AlertStyle.Fill}
                elevation={0}
              />
            </Warning>
          )}
        </Stack>
      </PaymentMethodWrapper>
    </ContentWrapper>
  );
};

export default PaymentMethod;

export const ContentWrapper = styled('div')`
  padding: 18px;
  background-color: ${Colors.white};
`;

export const PaymentMethodItem = styled('div')`
  box-shadow: 0px 2px 4px 0px #0000001a;
  padding: 5px 10px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid #f3f6f9;
  cursor: pointer;
  &.selected {
    border: 2px solid ${Colors.primary001};
  }
`;

export const PaymentMethodWrapper = styled('div')`
  margin-top: 10px;
`;

export const Warning = styled('div')`
  width: 100%;
`;
