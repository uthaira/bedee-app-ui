import React from 'react'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../colors'

export interface LanguageSwitchProps {
  width?: string
  localeLanguage: string
  updatedSwitchData: (lang: ELanguage) => void
}

export enum ELanguage {
  TH = 'th',
  EN = 'en',
}

const SwitchWrapper = styled(Box)(() => ({
  height: '32px',
  borderRadius: 25,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Colors.gray6,
}))

const LanguageSwitch = (props: LanguageSwitchProps) => {
  const { localeLanguage, updatedSwitchData, width } = props

  const handleLanguageChange = (event: any, newLanguage: ELanguage) => {
    if (newLanguage !== null) {
      updatedSwitchData(newLanguage)
    }
  }

  return (
    <Box display="flex" flex={1}>
      <SwitchWrapper width={width}>
        <ToggleButtonGroup value={localeLanguage} exclusive onChange={handleLanguageChange} sx={{ width: '100%' }}>
          <ToggleButton
            value="th"
            sx={{
              '&.MuiToggleButton-root': {
                backgroundColor: localeLanguage === ELanguage.TH ? Colors.primary001 : Colors.gray6,
                color: localeLanguage === ELanguage.TH ? Colors.white : Colors.gray3,
                borderRadius: 25,
                border: 'none',
                marginRight:'1px',
                '&:hover': {
                  backgroundColor: localeLanguage === ELanguage.TH ? Colors.primary002 : Colors.gray6,
                },
              },
            }}
          >
            ไทย
          </ToggleButton>
          <ToggleButton
            value="en"
            sx={{
              '&.MuiToggleButton-root': {
                backgroundColor: localeLanguage === ELanguage.EN ? Colors.primary001 : Colors.gray6,
                color: localeLanguage === ELanguage.EN ? Colors.white : Colors.gray3,
                borderRadius: 25,
                border: 'none',
                '&:hover': {
                  backgroundColor: localeLanguage === ELanguage.EN ? Colors.primary002 : Colors.gray6,
                },
              },
            }}
          >
            ENG
          </ToggleButton>
        </ToggleButtonGroup>
      </SwitchWrapper>
    </Box>
  )
}

export default LanguageSwitch
