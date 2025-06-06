import React, { useEffect, useState } from 'react'
import AccessCodeForm from './accessCodeForm'
import { Cookie } from '../../utils'
import { checkNonProd } from '../../utils/redirect'

interface AccessCodeProviderProps {
  children: React.ReactNode
  domain: string
  cookieKey: string
  cookieValue: string
  accessCode: string
}

const AccessCodeProvider = (props: AccessCodeProviderProps) => {
  const { children, domain, cookieKey, cookieValue, accessCode } = props
  const checkAccess = Cookie.getCookie(cookieKey)

  const [hasAccess, setHasAccess] = useState(true)

  useEffect(() => {
    if (cookieKey && accessCode && !checkAccess && domain) {
      const { isNonProd } = checkNonProd(domain)
      if (isNonProd) {
        setHasAccess(false)
      }
    }
  }, [cookieKey, accessCode, checkAccess, domain])

  const onAccessCodeSuccess = () => {
    setHasAccess(true)
    Cookie.setCookie(cookieKey, cookieValue, { path: '/', days: 30, secure: true, sameSite: 'Lax' })
  }

  return <>{hasAccess ? <>{children}</> : <AccessCodeForm accessCode={accessCode} onSuccess={onAccessCodeSuccess} />}</>
}

export default AccessCodeProvider
