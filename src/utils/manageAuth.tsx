import { Cookie } from '.'
import { CookieOption } from './cookie'

export interface IAuthData {
  accessToken: string
  idToken: string
  refreshToken: string
}

export const getCookieOptions = () => {
  return {
    path: '/',
    days: 31,
  }
}

export const saveAuthData = (oAuthData: IAuthData) => {
  const cookieOptions = getCookieOptions()
  const options: CookieOption = { ...cookieOptions, secure: true, sameSite: 'Lax' }

  Cookie.setCookie('accessToken', oAuthData.accessToken, options)
  Cookie.setCookie('refreshToken', oAuthData.refreshToken, options)
  Cookie.setCookie('idToken', oAuthData.idToken, options)
}

export const removeAuthData = () => {
  const options = getCookieOptions()
  Cookie.removeCookie('accessToken', options)
  Cookie.removeCookie('refreshToken', options)
  Cookie.removeCookie('idToken', options)
  Cookie.removeCookie('otpToken', options)
}

export const getAuthData = () => {
  const accessToken = Cookie.getCookie('accessToken')
  const refreshToken = Cookie.getCookie('refreshToken')
  const idToken = Cookie.getCookie('idToken')
  const otpToken = Cookie.getCookie('otpToken')
  return { accessToken, refreshToken, idToken, otpToken }
}
