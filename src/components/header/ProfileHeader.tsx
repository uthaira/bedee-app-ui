import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import BeDeeLogo from '../../icons/BeDeeLogo'
import { BaseText, Mini, P2 } from '../font'
import { Colors } from '../../colors'
import { BdPrimaryButton, BdSecondaryButton } from '../button'
import ActivityHeaderIcon from '../../icons/ActivityHeaderIcon'
import ProfileHeaderIcon from '../../icons/ProfileHeaderIcon'
import { LanguageSwitch } from '../switch'
import { ELanguage } from '../switch/LanguageSwitch'
import CartIcon from '../../icons/CartIcon'

export interface ProfileHeaderProps {
  nameText?: string;
  isLogin?: boolean;
  localeLanguage?: string;
  badgeText?: string;
  updatedSwitchData?: (lang: ELanguage) => void;
  onActivity?: () => void;
  onCart?: () => void;
  onProfile?: () => void;
  onLogin?: () => void;
  onRegister?: () => void;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  const {
    nameText = '',
    isLogin = false,
    localeLanguage = '',
    badgeText,
    updatedSwitchData = () => {},
    onActivity = () => {},
    onProfile = () => {},
    onLogin = () => {},
    onRegister = () => {},
    onCart = () => {},
  } = props;

  const isThai = localeLanguage === ELanguage.TH;

  return (
    <>
      <Stack
        width='100%'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        paddingX='16px'
        paddingY='12px'
      >
        <Box>
          <BeDeeLogo />
          {isLogin && (
            <Stack direction='row' gap={1} alignItems='baseline'>
              <Mini
                text={isThai ? 'ยินดีต้อนรับ' : 'Welcome,'}
                color={Colors.gray7}
              />
              <BaseText
                text={nameText}
                color={Colors.gray7}
                sx={{ fontSize: '14px', fontWeight: '700' }}
              />
            </Stack>
          )}
        </Box>
        <Stack direction='row' alignItems='center'>
          {isLogin ? (
            <>
              <IconButton onClick={onActivity}>
                <ActivityHeaderIcon />
              </IconButton>

              <IconButton onClick={onCart}>
                <Badge
                  badgeContent={badgeText ? badgeText : undefined}
                  slotProps={{
                    badge: {
                      style: {
                        fontSize: 12,
                        verticalAlign: 'center',
                        textAlign: 'center',
                        backgroundColor: '#EE6E3A',
                        color: 'white',
                      },
                    },
                  }}
                  color='default'
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  overlap='circular'
                >
                  <CartIcon />
                </Badge>
              </IconButton>
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
                sx={{ height: '22px' }}
              />
              <IconButton onClick={onProfile}>
                <ProfileHeaderIcon />
              </IconButton>
            </>
          ) : (
            <LanguageSwitch
              localeLanguage={localeLanguage}
              updatedSwitchData={updatedSwitchData}
            />
          )}
        </Stack>
      </Stack>
      {isLogin ? undefined : (
        <Box width='100%' paddingX='16px'>
          <P2
            text={
              isThai
                ? 'สมัครใช้งานบีดี เพื่อรับสิทธิประโยชน์ดีดีด้านสุขภาพ'
                : 'Create an account to gain all health benefits'
            }
            color={Colors.gray6}
          />
          <Stack
            paddingY='16px'
            direction='row'
            gap={2}
            justifyContent='center'
            alignItems='center'
          >
            <BdSecondaryButton
              text={isThai ? 'เข้าสู่ระบบ' : 'Log in'}
              onClick={onLogin}
              width='fit'
              bdSize='sm'
            />
            <BdPrimaryButton
              text={isThai ? 'สมัครใช้งาน' : 'Register'}
              onClick={onRegister}
              width='fit'
              bdSize='sm'
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default ProfileHeader;
