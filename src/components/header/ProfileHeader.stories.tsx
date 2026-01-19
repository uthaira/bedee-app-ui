import { Meta, StoryObj } from '@storybook/react'
import ProfileHeader, { ProfileHeaderProps } from './ProfileHeader'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Header',
  component: ProfileHeader,
} as Meta<typeof ProfileHeader>

type ProfileHeaderStory = StoryObj<ProfileHeaderProps>

export const ProfileHeaderGuest: ProfileHeaderStory = {
  args: {
    nameText: 'John Doe',
    isLogin: false,
    localeLanguage: 'en',
    updatedSwitchData: action('Language switched'),
    onActivity: action('Activity button clicked'),
    onProfile: action('Profile button clicked'),
    onLogin: action('Login button clicked'),
    onRegister: action('Register button clicked'),
    onClickLogo: action('Logo clicked'),
  },
}

export const ProfileHeaderLoggedIn: ProfileHeaderStory = {
  args: {
    ...ProfileHeaderGuest.args,
    isLogin: true,
  },
}
