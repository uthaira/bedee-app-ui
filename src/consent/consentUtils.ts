import { ConsentData } from "./consentContext";

export const getConsentDataFromCookies = (): ConsentData | null => {
  const consentCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('consentData='))
    ?.split('=')[1];

  if (consentCookie) {
    return JSON.parse(decodeURIComponent(consentCookie));
  }
  return null;
};
