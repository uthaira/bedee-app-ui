type IconProps = {
  size?: number;
  color?: string;
};

const Check = (props: IconProps) => {
  const { size = 1, color = '#000000' } = props;
  const width = `${Math.ceil(15 * size)}`;
  const height = `${Math.ceil(15 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 13L9 17L19 7'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Check;
