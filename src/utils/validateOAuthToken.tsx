import dayjs from 'dayjs';
import { jwtDecode, type JwtPayload } from 'jwt-decode';

export const checkIsTokenExpired = (jwtToken: string, leadTime = 0) => {
    if (!jwtToken) return true;
  
    const decoded = jwtDecode<JwtPayload>(jwtToken);
    const { exp } = decoded;
    const nowDayJs = dayjs().unix();
    const diff = dayjs(nowDayJs).diff(dayjs(exp));
  
    return diff > leadTime;
  };