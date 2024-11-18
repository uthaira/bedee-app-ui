import React, { createContext, useState, useEffect, useCallback } from 'react';
import { Cookie } from '../utils';

export interface KycContextType {
  isKyc: boolean | undefined | null;
  setKycStatus: (status: boolean | undefined | null) => void;
  checkAndRedirectForKyc: (kycUrl: string, redirectUrl: string) => void;
  handleCheckKyc: (
    onCheckKyc?: () => Promise<any>,
    kycUrl?: string,
    redirectUrl?: string
  ) => void;
}

export const KycContext = createContext<KycContextType | undefined>(undefined);

export const KycProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isKyc, setIsKyc] = useState<boolean | undefined | null>(undefined);

  const setKycStatus = (status: boolean | undefined | null) => {
    if (status === undefined) {
      Cookie.removeCookie('isKycCompleted');
      return;
    }

    setIsKyc(status);
    Cookie.setCookie('isKycCompleted', String(status), { path: '/', days: 1 });
  };

  useEffect(() => {
    const kycFromCookie = Cookie.getCookie('isKycCompleted');
    if (kycFromCookie === 'true') {
      setIsKyc(true);
    } else {
      setIsKyc(false);
    }
  }, []);

  const checkAndRedirectForKyc = async (
    kycUrl: string,
    redirectUrl: string
  ) => {
    if (isKyc === false) {
      const redirectToUrlValue = redirectUrl || window.location.href;

      if (redirectToUrlValue) {
        const urlWithQuery = new URLSearchParams({
          redirectUrl: redirectToUrlValue,
        }).toString();

        window.location.replace(
          urlWithQuery ? `${kycUrl}?${urlWithQuery}` : redirectToUrlValue
        );
      }
    }
  };

  const handleCheckKyc = useCallback(
    async (
      onCheckKyc?: () => Promise<any>,
      kycUrl?: string,
      redirectUrl?: string
    ) => {
      try {
        if (!onCheckKyc) return;

        const kycStatus = await onCheckKyc();
        if (kycStatus) {
          setKycStatus(true);
        } else if (kycUrl) {
          checkAndRedirectForKyc(kycUrl, redirectUrl || '');
        }
      } catch (error) {
        console.error('Error checking KYC:', error);
      }
    },
    [checkAndRedirectForKyc, setKycStatus]
  );

  return (
    <KycContext.Provider
      value={{ isKyc, setKycStatus, checkAndRedirectForKyc, handleCheckKyc }}
    >
      {children}
    </KycContext.Provider>
  );
};

export default KycProvider;
