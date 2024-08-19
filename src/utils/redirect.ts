const getNewUrl = (url: string, path: string) => {
  const parsedUrl = new URL(url);
  const hostMatch = /(dev|qa|uat|services)\-services\.bedee\.com/;
  const isLocalhost = parsedUrl.hostname === 'localhost'

  if (isLocalhost || hostMatch.test(parsedUrl.hostname)) {
    const environment = parsedUrl.hostname.split('-')[0];
    if (isLocalhost) {
      return `https://localhost:3000${path}?redirectUrl=${url}`;
    } else {
      return `https://${environment}-services.bedee.com${path}?redirectUrl=${url}`;
    }
  }
  return ''
}

export const gotoLoginMobilePage = (url: string) => {
  const loginPath = '/home/login';
  window.location.href = getNewUrl(url, loginPath)
}

export const gotoLoginPinPage = (url: string) => {
  const loginPath = '/home/pin-login';
  window.location.href = getNewUrl(url, loginPath)
}