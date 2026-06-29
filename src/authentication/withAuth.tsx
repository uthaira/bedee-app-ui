import React, {
  ComponentType,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Authentication } from '.';
import { Redirect } from '../utils';
import LoadingWidget from '../components/widgets/loading';

export interface WithAuthOptions {
  unauthenRedirectUrl?: string;
}

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  options?: WithAuthOptions,
) => {
  return (props: P) => {
    const {
      isAuthenticated,
      isRequiredPin,
      isAuthLoading,
    } = Authentication.useAuth();

    const redirected = useRef(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
      if (redirected.current || ready) return;

      if (isAuthLoading) return;
      if (isAuthenticated == null || isRequiredPin == null) return;

      const redirectUrl = window.location.href;

      if (!isAuthenticated) {
        redirected.current = true;

        if (options?.unauthenRedirectUrl) {
          Redirect.gotoCustomPage(options.unauthenRedirectUrl);
        } else {
          Redirect.gotoWelcomePage(redirectUrl);
        }

        return;
      }

      if (isRequiredPin) {
        redirected.current = true;
        Redirect.gotoLoginPinPage(redirectUrl);
        return;
      }

      setReady(true);
    }, [
      isAuthenticated,
      isRequiredPin,
      isAuthLoading,
      ready,
      options?.unauthenRedirectUrl,
    ]);

    if (!ready) {
      return <LoadingWidget open={true} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;