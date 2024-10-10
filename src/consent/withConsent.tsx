import { useEffect } from 'react';
import useConsent from './useConsent';
import { ConsentData } from './consentContext';
import { buildUrl } from './consentUtils';

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
    }, [isRequiredFetchConsent, onFetchConsent, setConsentData]);

    useEffect(() => {
      if (consentData) {
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
