const getNewUrl = (url: string, path: string) => {
  const domain = window.location.origin;
  return `${domain}${path}?redirectUrl=${url}`;
}

export const checkNonProd = (url: string) => {
  const parsedUrl = new URL(url);
  const nonProdHostMatch = /(dev-services|qa-services|uat-services)\.bedee\.com/;
  const devHostMatch = /dev-services.bedee.com/;

  const isLocalhost = parsedUrl.hostname === 'localhost'
  const isNonProd = isLocalhost || nonProdHostMatch.test(parsedUrl.hostname);
  const isDevOnly = devHostMatch.test(parsedUrl.hostname);
  return {
    isNonProd,
    isLocalhost,
    isDevOnly,
  }
}

export const gotoLoginPhoneNumberPage = (url: string) => {
  const loginPath = '/home/login';
  window.location.href = getNewUrl(url, loginPath)
}

export const gotoWelcomePage = (url: string) => {
  const loginPath = '/home/welcome';
  window.location.href = getNewUrl(url, loginPath)
}

export const gotoLoginPinPage = (url: string) => {
  const loginPath = '/home/pin-login';
  window.location.href = getNewUrl(url, loginPath)
}

export const gotoCreatePinPage = (url: string) => {
  const path = '/home/pin-create';
  window.location.href = getNewUrl(url, path)
}

export const gotoCustomPage = (path: string) => {
  window.location.href = path;
}