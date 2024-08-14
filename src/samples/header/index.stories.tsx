import { Meta } from '@storybook/react'
import { Header } from '../../components/header'
import { Container } from '@mui/material'
import { useState } from 'react'

export const SampleHeader = () => {
  const [localeLanguage, setLocaleLanguage] = useState('th')

  const handleLanguageChange = (newLanguage: string) => {
    setLocaleLanguage(newLanguage)
    // Additional logic if needed, such as updating a global state or making API calls
    console.log(`Language switched to: ${newLanguage}`)
  }

  return (
    <Container sx={{ height: '100vh', padding: 0 }}>
      <Header
        headerText="สมัครใช้งานบีดี เพื่อรับสิทธิประโยชน์ดีดีด้านสุขภาพ"
        loginText="เข้าสู่ระบบ"
        registerText="สมัครใช้งาน"
        welcomeText="Welcome,"
        nameText="Pakorn"
        localeLanguage={localeLanguage}
        updatedSwitchData={handleLanguageChange}
      />
    </Container>
  )
}

export default {
  title: 'Sample/Header',
  component: SampleHeader,
} as Meta<typeof SampleHeader>
