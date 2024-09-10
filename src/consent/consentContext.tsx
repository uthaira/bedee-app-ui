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
}

export const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

interface ConsentProviderProps {
  children: React.ReactNode;
}

const ConsentProvider: React.FC<ConsentProviderProps> = ({ children }) => {
  const [consentData, setConsentData] = useState<ConsentData | null>(null);

  useEffect(() => {
    const consentCookie = getCookie('consentData');
    const parsedConsent = consentCookie ? JSON.parse(consentCookie) : null;
    if (parsedConsent) {
      setConsentData(parsedConsent);
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ consentData }}>
      {children}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;