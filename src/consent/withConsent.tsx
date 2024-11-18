import { useCallback, useEffect, useState } from 'react';
import useConsent from './useConsent';
import { ConsentData } from './consentContext';
import { buildUrl } from './consentUtils';
import { getCookie } from '../utils/cookie';

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
    const [isUpdatedConsent, setIsUpdatedConsent] = useState(false);
    const { onFetchConsent, consentUrl, redirectUrl } = options;

    const getUpdatedConsentDataFromCookie = useCallback(() => {
      // Update last consent from cookie
      const consentCookie = getCookie('consentData');
      const parsedConsent = consentCookie ? JSON.parse(consentCookie) : null;
      setIsUpdatedConsent(true);
      setConsentData(parsedConsent);
    }, [])

    useEffect(() => {
      if (isRequiredFetchConsent) {
        onFetchConsent?.().then((data: ConsentData) => {
          setIsUpdatedConsent(true);
          setConsentData(data);
        });
      }
    }, [isRequiredFetchConsent, onFetchConsent, setConsentData]);

    useEffect(() => {
      getUpdatedConsentDataFromCookie();
    }, []);

    useEffect(() => {
      if (consentData && isUpdatedConsent) {
        const redirectToUrlValue = window.location.href;

        if (consentData.medicalTreatmentConsent == null && consentUrl) {
          try {
            const redirectUrl = buildUrl(consentUrl, { redirectUrl: redirectToUrlValue });
            window.location.replace(redirectUrl);
          } catch (error) {
            console.error('Failed to build consent URL:', error);
          }
          return;
        }

        if (consentData.medicalTreatmentConsent === false && redirectUrl) {
          try {
            const providerListUrl = buildUrl(redirectUrl, {
              redirectUrl: redirectToUrlValue,
              isShowConsentBottomSheet: 'true'
            });
            window.location.replace(providerListUrl);
          } catch (error) {
            console.error('Failed to build provider list URL:', error);
          }
          return;
        }
      }
    }, [consentData, consentUrl, redirectUrl]);

    if (!consentData || !consentData?.medicalTreatmentConsent) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withConsent;
