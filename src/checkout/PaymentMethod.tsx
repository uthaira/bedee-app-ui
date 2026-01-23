import { Box, Radio, Stack } from '@mui/material'
import { Alert, AlertStyle, AlertType, H6, Lead2 } from '../components'
import React from 'react'
import { JCBIcon, MasterCardIcon, PaymentIcon, ThaiQrIcon, VisaIcon } from '../icons'
import { Colors } from '../colors'

export enum EPaymentMethod {
  promptpay = 'qr_code',
  creditCard = 'credit_debit_card',
  couponApplied = 'coupon_applied',
  zeroAmount = 'zero_amount',
  invoice = 'invoice',
  insurance = 'insurance',
}
interface EPaymentOption {
  title: string
  value: EPaymentMethod
  image?: React.ReactNode
}
interface PaymentMethodProps {
  onSelected?: (paymentType: EPaymentMethod) => void
  paymentsOption: EPaymentOption[]
  currentPaymentType?: EPaymentMethod
  title?: string
  hideTitle?: boolean
  alertText?: string
  withAlert?: boolean
  showCloseButton?: boolean
}

const PaymentMethod: React.FC<PaymentMethodProps> = (props) => {
  const {
    title = 'วิธีชำระเงิน',
    alertText = 'กรุณาทำรายการต่อ เพื่อยืนยันการรับคำปรึกษาภายใน 10 นาที',
    paymentsOption = [],
    onSelected,
    currentPaymentType,
    withAlert = false,
    hideTitle = false,
    showCloseButton = true,
  } = props
  const disabledSelect = !onSelected

  const getPaymentIcon = (type: EPaymentMethod) => {
    switch (type) {
      case EPaymentMethod.creditCard:
        return (
          <Stack direction={'row'} spacing={1} alignItems="center">
            <VisaIcon />
            <MasterCardIcon />
            <JCBIcon />
          </Stack>
        )
      case EPaymentMethod.promptpay:
        return <ThaiQrIcon />
      default:
        break
    }
  }

  const paymentMethod = (paymentData: EPaymentOption) => {
    if (!paymentData) return
    const isSelected = paymentData.value === currentPaymentType
    return (
      <Box
        onClick={() => !disabledSelect && onSelected(paymentData.value)}
        sx={{
          boxShadow: '0px 2px 4px 0px #0000001a',
          padding: '5px 10px',
          borderRadius: '8px',
          width: '100%',
          border: isSelected ? `2px solid ${Colors.primary001}` : '1px solid #f3f6f9',
          cursor: disabledSelect ? 'auto' : 'pointer',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center">
            <Radio checked={isSelected} onChange={() => ''} value={paymentData.value} name="radio-buttons" />
            <Lead2 text={paymentData.title} />
          </Stack>
          {paymentData.image ? paymentData.image : getPaymentIcon(paymentData.value)}
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        padding: '18px',
        backgroundColor: Colors.white,
      }}
    >
      {!hideTitle && (
        <Stack direction="row" alignItems="center" gap={'12px'}>
          <PaymentIcon />
          <H6 text={title} />
        </Stack>
      )}
      <Box
        sx={{
          marginTop: '10px',
        }}
      >
        <Stack direction="column" alignItems="start" gap={'12px'}>
          {paymentsOption.map((type: any) => paymentMethod(type))}
          {withAlert && (
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Alert text={alertText} type={AlertType.Info} style={AlertStyle.Fill} elevation={0} showCloseButton={showCloseButton} />
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default PaymentMethod
