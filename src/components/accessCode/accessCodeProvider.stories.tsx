import { Meta, StoryObj } from '@storybook/react'
import AccessCode from './accessCodeProvider'

export default {
  title: 'Components/accessCode/accessCodeProvider',
  component: AccessCode,
} as Meta<typeof AccessCodeProvider>

type AccessCodeProviderStory = StoryObj<typeof AccessCode>

export const AccessCodeProvider: AccessCodeProviderStory = {
  args: {
    domain: 'http://localhost:3000',
    cookieKey: 'cookieKey',
    accessCode: 'test',
    cookieValue: 'true',
    children: <div>You have accessed the site</div>,
  },
}
