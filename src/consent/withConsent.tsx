import { useEffect, useState } from 'react';
import useConsent from './useConsent';
import { ConsentData } from './consentContext';

export interface IWithConsentOptions {
  onFetchConsent?: () => Promise<any>;
  consentUrl?: string;
  redirectUrl?: string;
}

const withConsent = (
  Component: React.ComponentType,
  options: IWithConsentOptions = {}
) => {
  return (props: any) => {
    const { consentData, setConsentData, isRequiredFetchConsent } = useConsent();

    const { onFetchConsent, consentUrl, redirectUrl } = options;

    useEffect(() => {
      if (isRequiredFetchConsent) {
        onFetchConsent?.().then((data: ConsentData) => {
          setConsentData(data);
        });
      }
    }, [isRequiredFetchConsent]);

    useEffect(() => {
      const redirectToUrlValue = redirectUrl || window.location.href;

      if (consentData && !consentData?.medicalTreatmentConsent) {
        const composedUrl = new URL(consentUrl ?? '');
        composedUrl.searchParams.append('redirectUrl', redirectToUrlValue);

        window.location.replace(composedUrl.toString());
        return;
      }
    }, [consentData]);

    if (!consentData || !consentData?.medicalTreatmentConsent) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withConsent;
