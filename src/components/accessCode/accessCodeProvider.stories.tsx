import { Meta } from '@storybook/react'
import { AccessCodeProvider, Cookie } from '../..'
import { useState } from 'react'

export const AccessCodeProviderSample = () => {
  const [rerender, setRerender] = useState(false)

  return (
    <AccessCodeProvider domain="http://localhost:3000" cookieKey="cookieKey" accessCode="password" cookieValue="true">
      <div>
        <div>You have accessed the site</div>
        <button
          onClick={() => {
            Cookie.removeCookie('cookieKey')
            setRerender(!rerender)
          }}
        >
          Clear cookie
        </button>
      </div>
    </AccessCodeProvider>
  )
}

export default {
  title: 'Components/AccessCodeProvider',
  component: AccessCodeProviderSample,
} as Meta<typeof AccessCodeProviderSample>
