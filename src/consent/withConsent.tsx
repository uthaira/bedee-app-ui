import { useEffect, useState } from 'react';
import { Consent } from '.';

const withConsent = (Component: React.ComponentType) => {
  return (props: any) => {
    const { consentData } = Consent.useConsent();

    useEffect(() => {
      const redirectUrl = window.location.href;
      if (consentData && !consentData?.medicalTreatmentConsent) {
        window.location.href = `/home/consent/start?consentType=Consult&redirectUrl=${redirectUrl}`;
        return;
      }
    }, [consentData]);

    return <Component {...props} />;
  };
};

export default withConsent;
