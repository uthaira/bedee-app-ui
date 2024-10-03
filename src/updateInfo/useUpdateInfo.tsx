import { useContext } from 'react';
import { UpdateInfoContext, UpdateInfoContextType } from './updateInfoContext';

const useUpdateInfo = (): UpdateInfoContextType => {
  const context = useContext(UpdateInfoContext);
  if (!context) {
    throw new Error('useUpdateInfo must be used within an UpdateInfoProvider');
  }
  return context;
};

export default useUpdateInfo;
