import { useToast } from '../toast';
import { useContext, useEffect } from 'react';

import { KycContext, KycContextType } from './kycContext';

export interface IWithKycOptions {
  kycUrl?: string;
  redirectUrl?: string;
  onCheckKyc?: () => Promise<any>;
}

enum KycStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useKyc = ({
  kycUrl = '',
  redirectUrl = '',
  onCheckKyc,
}: IWithKycOptions = {}): KycContextType => {
  const context = useContext(KycContext);
  const toast = useToast();
  if (!context) {
    throw new Error('useKyc must be used within a KycProvider');
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const kyc = query.get('kyc');

    if (!context.isKyc && onCheckKyc && kyc !== KycStatus.FAILED) {
      context.handleCheckKyc(onCheckKyc, kycUrl, redirectUrl);
    }
  }, [context.isKyc, onCheckKyc, kycUrl, redirectUrl]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const kyc = query.get('kyc');
    const kycMessage = query.get('message');

    if (kyc === KycStatus.SUCCESS && kycMessage) {
      toast.success(kycMessage, { alignment: 'top' });
    } else if (kyc === KycStatus.FAILED) {
      window.history.back();
    }
  }, []);

  return context;
};

export default useKyc;
