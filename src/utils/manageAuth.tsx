import { Cookie } from '.';

export interface IAuthData {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export const getCookieOptions = () => {
  return {
    path: '/',
  }
};

export const saveAuthData = (oAuthData: IAuthData) => {
  const options = getCookieOptions()
  Cookie.setCookie('accessToken', oAuthData.accessToken, options);
  Cookie.setCookie('refreshToken', oAuthData.refreshToken, options);
  Cookie.setCookie('idToken', oAuthData.idToken, options);
};

export const removeAuthData = () => {
  Cookie.removeCookie('accessToken');
  Cookie.removeCookie('refreshToken');
  Cookie.removeCookie('idToken');
  Cookie.removeCookie('otpToken');
};

export const getAuthData = () => {
  const accessToken = Cookie.getCookie('accessToken');
  const refreshToken = Cookie.getCookie('refreshToken');
  const idToken = Cookie.getCookie('idToken');
  const otpToken = Cookie.getCookie('otpToken');
  return { accessToken, refreshToken, idToken, otpToken };
};