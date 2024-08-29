type IconProps = {
  size?: number;
  color?: string;
};

const DrugsIcon = (props: IconProps) => {
  const { size = 1 } = props;
  const width = `${Math.ceil(32 * size)}`;
  const height = `${Math.ceil(32 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.33398 21.9211C5.33398 19.2701 7.48302 17.1211 10.134 17.1211H16.0007V26.7211H10.134C7.48302 26.7211 5.33398 24.5721 5.33398 21.9211Z'
        fill='#317DF6'
      />
      <path
        d='M26.668 21.9207C26.668 24.5717 24.5189 26.7207 21.868 26.7207L16.0013 26.7207L16.0013 17.1207L21.868 17.1207C24.5189 17.1207 26.668 19.2697 26.668 21.9207Z'
        fill='#081F7B'
      />
      <line
        x1='16.902'
        y1='5.22031'
        x2='16.902'
        y2='10.887'
        stroke='#F95247'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
      <line
        x1='26.6152'
        y1='7.72592'
        x2='22.6083'
        y2='11.7329'
        stroke='#F95247'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
      <line
        x1='0.9'
        y1='-0.9'
        x2='6.56667'
        y2='-0.9'
        transform='matrix(0.707107 0.707107 0.707107 -0.707107 6.40039 6.45312)'
        stroke='#F95247'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default DrugsIcon;
