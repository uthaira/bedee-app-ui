import React from 'react'
import { Box, colors, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../colors'

interface LanguageSwitchProps {
  localeLanguage: string
  updatedSwitchData: (lang: string) => void
}

const SwitchWrapper = styled(Box)(({ theme }) => ({
  height: 32,
  width: 100,
  borderRadius: 25,
  display: 'flex',
  justifyContent: 'center',
}))

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ localeLanguage, updatedSwitchData }) => {
  const handleLanguageChange = (event: any, newLanguage: string) => {
    if (newLanguage !== null) {
      updatedSwitchData(newLanguage)
    }
  }

  console.log(localeLanguage)

  return (
    <Box display="flex" justifyContent="flex-end" flex={1}>
      <SwitchWrapper>
        <ToggleButtonGroup
          value={localeLanguage}
          exclusive
          onChange={handleLanguageChange}
          sx={{ width: '100%', }}
        >
          <ToggleButton
            value="th"
            sx={{
              '&.MuiToggleButton-root': {
                backgroundColor: localeLanguage === 'th' ? Colors.primary001 : Colors.gray5,
                color: localeLanguage === 'th' ? Colors.white : Colors.gray3,
                borderRadius: 25,
              },
            }}
          >
            ไทย
          </ToggleButton>
          <ToggleButton
            value="en"
            sx={{
                '&.MuiToggleButton-root': {
                  backgroundColor: localeLanguage === 'en' ? Colors.primary001 : Colors.gray5,
                  color: localeLanguage === 'en' ? Colors.white : Colors.gray3,
                  borderRadius: 25,
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
