import { Box, Divider, IconButton, Stack } from '@mui/material'
import BeDeeLogo from '../../icons/BeDeeLogo'
import { BaseText, Mini, P2 } from '../font'
import { Colors } from '../../colors'
import { BdPrimaryButton, BdSecondaryButton } from '../button'
import ActivityHeaderIcon from '../../icons/ActivityHeaderIcon'
import ProfileHeaderIcon from '../../icons/ProfileHeaderIcon'
import { LanguageSwitch } from '../switch'
import { ELanguage } from '../switch/LanguageSwitch'

export interface ProfileHeaderProps {
  headerText?: string
  loginText?: string
  registerText?: string
  welcomeText?: string
  nameText?: string
  isLogin?: boolean
  localeLanguage?: string
  updatedSwitchData?: (lang: ELanguage) => void
  onActivity?: () => void
  onProfile?: () => void
  onLogin?: () => void
  onRegister?: () => void
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  const {
    headerText = '',
    loginText = '',
    registerText = '',
    welcomeText = '',
    nameText = '',
    isLogin = false,
    localeLanguage = '',
    updatedSwitchData = () => {},
    onActivity = () => {},
    onProfile = () => {},
    onLogin = () => {},
    onRegister = () => {},
  } = props

  return (
    <>
      <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" paddingX="16px" paddingY="12px">
        <Box>
          <BeDeeLogo />
          {isLogin && (
            <Stack direction="row" gap={1} alignItems="baseline">
              <Mini text={welcomeText} color={Colors.gray7} />
              <BaseText text={nameText} color={Colors.gray7} fontSize={14} fontWeight={700} />
            </Stack>
          )}
        </Box>
        <Stack direction="row" alignItems="center">
          {isLogin ? (
            <>
              <IconButton onClick={onActivity}>
                <ActivityHeaderIcon />
              </IconButton>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ height: '22px' }} />
              <IconButton onClick={onProfile}>
                <ProfileHeaderIcon />
              </IconButton>
            </>
          ) : (
            <LanguageSwitch localeLanguage={localeLanguage} updatedSwitchData={updatedSwitchData} />
          )}
        </Stack>
      </Stack>
      {isLogin ? undefined : (
        <Box width="100%" paddingX="16px">
          <P2 text={headerText} color={Colors.gray6} />
          <Stack paddingY="16px" direction="row" gap={2} justifyContent="center" alignItems="center">
            <BdSecondaryButton text={loginText} onClick={onLogin} width="fit" bdSize="sm" />
            <BdPrimaryButton text={registerText} onClick={onRegister} width="fit" bdSize="sm" />
          </Stack>
        </Box>
      )}
    </>
  )
}

export default ProfileHeader
