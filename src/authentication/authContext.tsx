import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
} from 'react';
import { Cookie, ManageAuth, ValidateOAuthToken } from '../utils';

export interface AuthContextProps {
  isAuthenticated: boolean | null;
  isRequiredPin: boolean | null;
  /** False only after cookies are read and auth flags are applied for the first time */
  isAuthLoading: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  otpToken: string | null;
  onRefresh: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export type AuthProviderProps = {
  children: ReactNode;
  /** Shown until initial auth state is derived from cookies (avoids layout flash / overlap) */
  loadingFallback?: ReactNode;
};

export const AuthProvider = ({
  children,
  loadingFallback = null,
}: AuthProviderProps) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isRequiredPin, setIsRequiredPin] = useState<boolean | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [otpToken, setOtpToken] = useState<string | null>(null);

  const getCurrentAuthData = () => {
    const accessToken = Cookie.getCookie('accessToken');
    const refreshToken = Cookie.getCookie('refreshToken');
    const idToken = Cookie.getCookie('idToken');
    const otpToken = Cookie.getCookie('otpToken');
    return { accessToken, refreshToken, idToken, otpToken };
  };

  const removeAuthData = () => {
    console.log('removeAuthData');
    ManageAuth.removeAuthData();
  };

  const syncAuthFromCookies = (): void => {
    for (;;) {
      const { accessToken, refreshToken, otpToken } = getCurrentAuthData();

      if (otpToken && !accessToken && !refreshToken) {
        const otpTokenExpired = ValidateOAuthToken.checkIsTokenExpired(
          otpToken || '',
        );
        console.log('otpTokenExpired');
        if (otpTokenExpired) {
          removeAuthData();
          continue;
        }
      }
      break;
    }

    const { accessToken, idToken, refreshToken, otpToken } =
      getCurrentAuthData();

    if (otpToken) {
      setIsAuthenticated(true);
      setIsRequiredPin(true);
    } else {
      setIsAuthenticated(false);
      setIsRequiredPin(true);
    }

    if (accessToken) {
      setAccessToken(accessToken);
      setIsAuthenticated(true);
      setIsRequiredPin(false);
    }

    if (refreshToken) setRefreshToken(refreshToken);
    if (idToken) setIdToken(idToken);
    if (otpToken) setOtpToken(otpToken);

    if (accessToken || refreshToken) {
      const isAccessTokenExpired = ValidateOAuthToken.checkIsTokenExpired(
        accessToken || '',
      );
      const refreshTokenExpired = ValidateOAuthToken.checkIsTokenExpired(
        refreshToken || '',
      );
      if (isAccessTokenExpired || refreshTokenExpired) {
        console.log('accessTokenExpired and refreshTokenExpired');
        Cookie.removeCookie('accessToken', { path: '/' });
        setIsAuthenticated(true);
        setIsRequiredPin(true);
      }
    }
  };

  const onRefresh = (): void => {
    syncAuthFromCookies();
  };

  useEffect(() => {
    if (accessToken) {
      const accessTokenExpired = ValidateOAuthToken.checkIsTokenExpired(accessToken);
      if (accessTokenExpired) {
        console.log('accessTokenExpired')
        Cookie.removeCookie('accessToken' , { path: '/'});
        setIsRequiredPin(true);
        return;
      }
    }
  }, [accessToken])

  useEffect(() => {
    if (refreshToken) {
      const refreshTokenExpired = ValidateOAuthToken.checkIsTokenExpired(refreshToken);
      if (refreshTokenExpired) {
        console.log('refreshTokenExpired')
        removeAuthData()
        onRefresh()
        return;
      }
    }
  }, [refreshToken]);

  useLayoutEffect(() => {
    syncAuthFromCookies();
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRequiredPin,
        isAuthLoading,
        accessToken,
        refreshToken,
        idToken,
        otpToken,
        onRefresh,
      }}
    >
      {isAuthLoading ? loadingFallback : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider