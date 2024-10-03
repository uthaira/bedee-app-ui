import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ProfileData {
  idCard?: string;
  passportNo?: string;
}

export interface UpdateInfoContextType {
  profileData: ProfileData | null;
  setProfileData: (profileData: ProfileData) => void;
}

export const UpdateInfoContext = createContext<UpdateInfoContextType | null>(
  null
);

const UpdateInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  return (
    <UpdateInfoContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </UpdateInfoContext.Provider>
  );
};

export default UpdateInfoProvider;
