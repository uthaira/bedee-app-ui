export interface CookieOption {
  days?: number;
  secure?: boolean;
  path?: string;
  domain?: string;
  sameSite?: 'None' | 'Lax' | 'Strict';
  httpOnly?: boolean;
}

export const setCookie = (
  name: string,
  value: string | null,
  options: CookieOption = {}
) => {
  if (typeof document === 'undefined') return; // Ensure we're in the browser
  if(!options){
    const domain = window.location.hostname
    options = { path: '/', domain, secure: false }
  }

  let cookieString = `${encodeURIComponent(name)}=${value ? encodeURIComponent(value): null};`;

  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    cookieString += `expires=${date.toUTCString()};`;
  }

  if (options.path) {
    cookieString += `path=${options.path};`;
  }

  if (options.domain) {
    cookieString += `domain=${options.domain};`;
  }

  if (options.sameSite) {
    cookieString += `SameSite=${options.sameSite};`;
  }

  if (options.secure) {
    cookieString += `secure;`;
  }

  if (options.httpOnly) {
    cookieString += `HttpOnly;`;
  }

  document.cookie = cookieString;
};

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null; // Ensure we're in the browser

  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

export const removeCookie = (
  name: string,
  options: { path?: string; domain?: string } = {}
) => {
  if (typeof document === 'undefined') return; // Ensure we're in the browser

  setCookie(name, null, { days: -1, path: options.path, domain: options.domain });
};
