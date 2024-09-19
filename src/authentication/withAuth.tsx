import React, { useEffect } from 'react';
import { Authentication } from '.';
import { Redirect } from '../utils';

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const { isAuthenticated, isRequiredPin } = Authentication.useAuth();

    useEffect(() => {
      if (isAuthenticated == null || isRequiredPin == null) return;
      const redirectUrl = window.location.href;

      if (!isAuthenticated) {
        Redirect.gotoWelcomePage(redirectUrl)
        return;
      }

      if (isAuthenticated && isRequiredPin) {
        Redirect.gotoLoginPinPage(redirectUrl)
        return;
      }
    }, [isAuthenticated, isRequiredPin]);

    if (isAuthenticated == null || isRequiredPin == null || !isAuthenticated || isRequiredPin) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;