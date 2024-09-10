import { useContext } from "react";
import { ConsentContext, ConsentContextType } from "./consentContext";


const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};

export default useConsent