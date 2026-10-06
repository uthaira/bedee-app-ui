import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  InputBase,
  Stack,
  Tooltip,
  Typography,
  styled,
} from '@mui/material'
import { SwipeableBottomSheetV2 } from '../components/bottomsheet'
import { Colors } from '../colors'

const CVV_MIN_LENGTH = 3
const CVV_MAX_LENGTH = 4

export interface CvvBottomSheetCard {
  // masked number from card-list; only the last 4 digits are shown
  number?: string
  // YYYYMM
  expired?: string
}

export interface CvvBottomSheetTexts {
  title: string
  cardNumberLabel: string
  expiryLabel: string
  cvvLabel: string
  cvvPlaceholder: string
  cvvHint: string
  cvvError: string
  confirmButton: string
  newCardButton: string
}

const defaultTexts: CvvBottomSheetTexts = {
  title: 'บัตรที่บันทึกไว้',
  cardNumberLabel: 'หมายเลขบัตรเครดิต/เดบิต',
  expiryLabel: 'วันหมดอายุ',
  cvvLabel: 'CVC/CVV',
  cvvPlaceholder: 'รหัส 3-4 หลัก',
  cvvHint: 'รหัสความปลอดภัย 3 หรือ 4 หลักบนบัตรของคุณ',
  cvvError: 'กรุณากรอกรหัส CVC/CVV',
  confirmButton: 'เลือกบัตรที่บันทึกไว้',
  newCardButton: 'เลือกใช้บัตรใหม่',
}

export const formatMaskedCardNumber = (cardNumber = '') => {
  const lastFourDigits = cardNumber.slice(-4)
  return /^\d{4}$/.test(lastFourDigits) ? `XXXX - XXXX - XXXX - ${lastFourDigits}` : ''
}

export const formatCardExpiry = (expired = '') => {
  if (!/^\d{6}/.test(expired)) return ''
  return `${expired.slice(4, 6)}/${expired.slice(2, 4)}`
}

export interface CvvBottomSheetProps {
  isOpen: boolean
  card?: CvvBottomSheetCard | null
  texts?: Partial<CvvBottomSheetTexts>
  // disables both buttons while the caller deletes the card or charges
  isLoading?: boolean
  onConfirm: (cvv: string) => void
  onUseNewCard: () => void
  onClose: () => void
}

// Display only. The CVV lives in this component's state and is handed to
// onConfirm; the caller must keep it in memory and never store or log it.
const CvvBottomSheet = ({
  isOpen,
  card,
  texts,
  isLoading = false,
  onConfirm,
  onUseNewCard,
  onClose,
}: CvvBottomSheetProps) => {
  const text = { ...defaultTexts, ...texts }
  const [cvv, setCvv] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [isHintOpen, setIsHintOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setCvv('')
      setIsTouched(false)
      setIsHintOpen(false)
    }
  }, [isOpen])

  const isCvvValid = cvv.length >= CVV_MIN_LENGTH
  const showCvvError = isTouched && !isCvvValid

  const handleChangeCvv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true)
    setCvv(event.target.value.replace(/\D/g, '').slice(0, CVV_MAX_LENGTH))
  }

  const handleConfirm = () => {
    if (!isCvvValid || isLoading) return
    const value = cvv
    setCvv('')
    onConfirm(value)
  }

  return (
    <SwipeableBottomSheetV2 isOpen={isOpen} isCloseButton={false} onCloseDrawer={onClose}>
      <Stack sx={{ width: '100%', padding: '8px 0 16px' }}>
        <Box display="flex" justifyContent="flex-end">
          <CloseButton aria-label="close" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </CloseButton>
        </Box>
        <Title>{text.title}</Title>

        <Field>
          <FieldLabel>{text.cardNumberLabel}</FieldLabel>
          <ReadOnlyInput
            value={formatMaskedCardNumber(card?.number)}
            readOnly
            inputProps={{ 'aria-label': text.cardNumberLabel }}
          />
        </Field>

        <Stack direction="row" gap="12px">
          <Field sx={{ flex: 3 }}>
            <FieldLabel>{text.expiryLabel}</FieldLabel>
            <ReadOnlyInput
              value={formatCardExpiry(card?.expired)}
              readOnly
              inputProps={{ 'aria-label': text.expiryLabel }}
            />
          </Field>
          <Field sx={{ flex: 2 }}>
            <FieldLabel>{text.cvvLabel}</FieldLabel>
            <CvvInput
              type="password"
              autoComplete="off"
              value={cvv}
              onChange={handleChangeCvv}
              error={showCvvError}
              placeholder={text.cvvPlaceholder}
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                maxLength: CVV_MAX_LENGTH,
                'aria-label': text.cvvLabel,
              }}
              endAdornment={
                <ClickAwayListener onClickAway={() => setIsHintOpen(false)}>
                  <Tooltip
                    title={text.cvvHint}
                    open={isHintOpen}
                    placement="top-end"
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                  >
                    <HintButton aria-label={text.cvvHint} onClick={() => setIsHintOpen((open) => !open)}>
                      <InfoOutlinedIcon fontSize="small" />
                    </HintButton>
                  </Tooltip>
                </ClickAwayListener>
              }
            />
          </Field>
        </Stack>
        {showCvvError && <ErrorText>{text.cvvError}</ErrorText>}

        <Stack gap="16px" sx={{ marginTop: '40px' }}>
          <PrimaryPillButton
            disableElevation
            variant="contained"
            disabled={!isCvvValid || isLoading}
            onClick={handleConfirm}
          >
            {text.confirmButton}
          </PrimaryPillButton>
          <OutlinedPillButton variant="outlined" disabled={isLoading} onClick={onUseNewCard}>
            {text.newCardButton}
          </OutlinedPillButton>
        </Stack>
      </Stack>
    </SwipeableBottomSheetV2>
  )
}

export default CvvBottomSheet

const CloseButton = styled(IconButton)`
  width: 36px;
  height: 36px;
  background-color: ${Colors.gray1};
  color: ${Colors.gray7};

  &:hover {
    background-color: ${Colors.gray2};
  }
`

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.gray7};
  margin-bottom: 24px;
`

const Field = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  min-width: 0;
`

const FieldLabel = styled(Typography)`
  font-size: 16px;
  color: ${Colors.gray6};
`

const BaseInput = styled(InputBase)`
  height: 52px;
  padding: 0 12px 0 16px;
  border-radius: 8px;
  font-size: 18px;

  & input {
    padding: 0;
  }
`

const ReadOnlyInput = styled(BaseInput)`
  background-color: ${Colors.gray1};
  border: 1px solid ${Colors.gray2};
  color: ${Colors.gray4};

  & input {
    cursor: default;
  }
`

const CvvInput = styled(BaseInput)`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.gray2};
  color: ${Colors.gray7};

  &.Mui-focused {
    border-color: ${Colors.formBorderActive};
  }

  &.Mui-error {
    border-color: ${Colors.error};
  }

  & input::placeholder {
    font-size: 14px;
  }
`

const HintButton = styled(IconButton)`
  padding: 4px;
  color: ${Colors.gray5};
`

const ErrorText = styled(Typography)`
  margin-top: -8px;
  font-size: 14px;
  color: ${Colors.textError};
  text-align: right;
`

const PillButton = styled(Button)`
  height: 52px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  text-transform: none;
`

const PrimaryPillButton = styled(PillButton)`
  background-color: ${Colors.primary001};
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.primary002};
  }

  &.Mui-disabled {
    background-color: ${Colors.primary004};
    color: ${Colors.white};
  }
`

const OutlinedPillButton = styled(PillButton)`
  border: 1px solid ${Colors.primary001};
  color: ${Colors.primary001};
  background-color: ${Colors.white};

  &:hover {
    border-color: ${Colors.primary001};
    background-color: ${Colors.primary006};
  }

  &.Mui-disabled {
    border-color: ${Colors.primary004};
    color: ${Colors.primary004};
  }
`
