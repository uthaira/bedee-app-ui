import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCookie } from '../utils/cookie';

export interface ConsentData {
  time: string;
  version: number;
  medicalTreatmentConsent: boolean;
  insuranceConsent: boolean;
  medicalTreatmentDataSharingConsent: boolean;
  marketingDataSharingConsent: boolean;
}

export interface ConsentContextType {
  consentData: ConsentData | null;
  setConsentData: (consentData: ConsentData) => void;
  isRequiredFetchConsent: boolean;
}

export const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export interface ConsentProviderProps {
  children: React.ReactNode;
}

const ConsentProvider: React.FC<ConsentProviderProps> = ({ children }) => {
  const [consentData, setConsentData] = useState<ConsentData | null>(null);
  const [isRequiredFetchConsent, setIsRequiredFetchConsent] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie('consentData');
    const parsedConsent = consentCookie ? JSON.parse(consentCookie) : null;
    if (parsedConsent) {
      setConsentData(parsedConsent);
    } else {
      setIsRequiredFetchConsent(true);
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ consentData, setConsentData, isRequiredFetchConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;