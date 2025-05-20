import { Meta } from '@storybook/react'
import Container from '@mui/material/Container'
import { useState } from 'react'
import LanguageSwitch, { ELanguage } from '../../components/switch/LanguageSwitch'
import { Box } from '../layout'

export const SampleSwitch = () => {
  const [localeLanguage, setLocaleLanguage] = useState(ELanguage.TH)

  const handleLanguageChange = (lang: ELanguage) => {
    setLocaleLanguage(lang)
  }

  return (
    <Container sx={{ height: '100vh', padding: 0 }}>
      <Box title="Language Switch">
        <LanguageSwitch localeLanguage={localeLanguage} updatedSwitchData={handleLanguageChange} />
      </Box>
    </Container>
  )
}

export default {
  title: 'Sample/Switch',
  component: SampleSwitch,
} as Meta<typeof SampleSwitch>
