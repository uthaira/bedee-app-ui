import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { Cookie, ValidateOAuthToken } from '../utils';

export interface AuthContextProps {
  isAuthenticated: boolean | null;
  isRequiredPin: boolean | null;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  otpToken: string | null;
  onRefresh: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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

  const onRefresh = (): void => {
    const { accessToken, idToken, refreshToken, otpToken } =
      getCurrentAuthData();

    if (otpToken) {
      const isotpTokenExpired = ValidateOAuthToken.checkIsTokenExpired(otpToken || '');
      if (isotpTokenExpired) {
        removeAuthData();
        onRefresh();
        return;
      }

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
      const isAccessTokenExpired = ValidateOAuthToken.checkIsTokenExpired(accessToken || '');
      const refreshTokenExpired = ValidateOAuthToken.checkIsTokenExpired(refreshToken || '');
      if (isAccessTokenExpired || refreshTokenExpired) {
        setIsAuthenticated(true);
        setIsRequiredPin(true);
      }
    }
  };

  const removeAuthData = () => {
    Cookie.removeCookie('accessToken');
    Cookie.removeCookie('refreshToken');
    Cookie.removeCookie('idToken');
    Cookie.removeCookie('otpToken');
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRequiredPin,
        accessToken,
        refreshToken,
        idToken,
        otpToken,
        onRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider