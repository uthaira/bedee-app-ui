const getNewUrl = (url: string, path: string) => {
  const parsedUrl = new URL(url);
  const { isNonProd, isLocalhost } = checkNonProd(url)

  if (isNonProd) {
    const environment = parsedUrl.hostname.split('-')[0];
    if (isLocalhost) {
      return `http://localhost:3000${path}?redirectUrl=${url}`;
    } else {
      return `https://${environment}-services.bedee.com${path}?redirectUrl=${url}`;
    }
  }
  return ''
}

export const checkNonProd = (url: string) => {
  const parsedUrl = new URL(url);
  const hostMatch = /(dev|qa|uat|services)\-services\.bedee\.com/;

  const isLocalhost = parsedUrl.hostname === 'localhost'
  const isNonProd = isLocalhost || hostMatch.test(parsedUrl.hostname);
  return {
    isNonProd,
    isLocalhost
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