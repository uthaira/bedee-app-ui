import { Meta, StoryObj } from '@storybook/react'
import LanguageSwitch, { LanguageSwitchProps, ELanguage } from './LanguageSwitch'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Switch',
  component: LanguageSwitch,
} as Meta<typeof LanguageSwitch>

type LanguageSwitchStory = StoryObj<LanguageSwitchProps>

export const LanguageSwitchComponent: LanguageSwitchStory = {
  args: {
    localeLanguage: ELanguage.TH,
    updatedSwitchData: action('Language switched'),
    width: '100px',
  },
}
