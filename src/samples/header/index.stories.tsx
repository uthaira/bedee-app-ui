import { Meta } from '@storybook/react'
import { BdPrimaryButton, ProfileHeader } from '../../components'
import { Container } from '@mui/material'
import { useState } from 'react'
import { ELanguage } from '../../components/switch/LanguageSwitch'

export const SampleHeader = () => {
  const [localeLanguage, setLocaleLanguage] = useState(ELanguage.TH)
  const [isLogin, setIsLogin] = useState(false)

  const handleLanguageChange = (lang: ELanguage) => {
    setLocaleLanguage(lang)
  }

  const onLogin = () => {
    setIsLogin(true)
  }

  return (
    <Container sx={{ height: '100vh', padding: 0 }}>
      <ProfileHeader
        headerText="สมัครใช้งานบีดี เพื่อรับสิทธิประโยชน์ดีดีด้านสุขภาพ"
        loginText="เข้าสู่ระบบ"
        registerText="สมัครใช้งาน"
        welcomeText="Welcome,"
        nameText="Pakorn"
        localeLanguage={localeLanguage}
        updatedSwitchData={handleLanguageChange}
        onLogin={onLogin}
        onRegister={onLogin}
        isLogin={isLogin}
      />
      {isLogin && <BdPrimaryButton text="Back" onClick={() => setIsLogin(false)} />}
    </Container>
  )
}

export default {
  title: 'Sample/Header',
  component: SampleHeader,
} as Meta<typeof SampleHeader>
