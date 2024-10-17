import { i18n } from 'i18next';
import React, { createContext, ReactNode, useEffect, useMemo } from 'react';
import { Cookie, ValidateOAuthToken } from '../utils';

export interface LanguageContextProps {
  lang: string;
  changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{
  children: ReactNode;
  i18n: i18n;
}> = ({ children, i18n }) => {
  const lang = i18n.language;

  const accessToken = Cookie.getCookie('accessToken') || ''
  const userInfo = useMemo(() => accessToken && ValidateOAuthToken.getInfoFromToken(
    accessToken
  ) as any, [accessToken])

  const changeLanguage = (language: string) => {
    if (i18n && i18n?.changeLanguage) {
      i18n.changeLanguage(language);
    }
    Cookie.setCookie('i18next', language, { path: '/' });
  };

  // useEffect(() => {
  //   const savedLang = Cookie.getCookie('i18next');
  //   if (savedLang && savedLang !== lang && i18n && i18n?.changeLanguage) {
  //     i18n.changeLanguage(savedLang);
  //   }
  // }, [lang, i18n]);

  useEffect(() => {
    if (userInfo && userInfo?.preferredLanguage) {
      if (lang !== userInfo?.preferredLanguage) {
        changeLanguage(userInfo?.preferredLanguage);
      }
    } else {
      const savedLang = Cookie.getCookie('i18next');
      if (savedLang && savedLang !== lang && i18n && i18n?.changeLanguage) {
        i18n.changeLanguage(savedLang);
      }
    }
  }, [userInfo, lang, i18n])

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
