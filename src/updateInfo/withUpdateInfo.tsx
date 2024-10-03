import { useEffect, useState } from 'react';
import useUpdateProfile from './useUpdateInfo';
import { ProfileData } from './updateInfoContext';

export interface IWithUpdateProfileOptions {
  onFetchProfile?: () => Promise<any>;
  updateInfoUrl?: string;
  redirectUrl?: string;
}

const withUpdateInfo = (
  Component: React.ComponentType,
  options: IWithUpdateProfileOptions = {}
) => {
  return (props: any) => {
    const { profileData, setProfileData } = useUpdateProfile();

    const { onFetchProfile, updateInfoUrl, redirectUrl } = options;

    useEffect(() => {
      if (onFetchProfile) {
        onFetchProfile().then((data: ProfileData) => {
          setProfileData(data);
        });
      }
    }, [onFetchProfile, updateInfoUrl, setProfileData]);

    useEffect(() => {
      const redirectToUrlValue = redirectUrl || window.location.href;

      if (profileData && !profileData.idCard && !profileData.passportNo) {
        const composedUrl = new URL(updateInfoUrl ?? '');
        composedUrl.searchParams.append('redirectUrl', redirectToUrlValue);

        window.location.replace(composedUrl.toString());
        return;
      }
    }, [profileData]);

    if (!profileData) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withUpdateInfo;
