import useKyc, { IWithKycOptions } from './useKyc';

const withKyc = (
  Component: React.ComponentType,
  options: IWithKycOptions = {}
) => {
  const { kycUrl = '', redirectUrl = '', onCheckKyc = undefined } = options;
  return (props: any) => {
    const { isKyc } = useKyc({
      onCheckKyc,
      kycUrl,
      redirectUrl,
    });

    if (isKyc) {
      return <Component {...props} />;
    }

    return null;
  };
};

export default withKyc;
