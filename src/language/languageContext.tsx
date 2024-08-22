import React, { createContext, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie } from '../utils';

export interface LanguageContextProps {
  lang: string;
  changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const changeLanguage = (language: string) => {
    if (i18n && i18n?.changeLanguage) {
      i18n.changeLanguage(language);
    }
    Cookie.setCookie('i18next', language, { path: '/' });
  };

  useEffect(() => {
    const savedLang = Cookie.getCookie('i18next');
    if (savedLang && savedLang !== lang && i18n && i18n?.changeLanguage) {
      i18n.changeLanguage(savedLang);
    }
  }, [lang, i18n]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
