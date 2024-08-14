type IconProps = {
  size?: number;
  color?: string;
};

const Circle = (props: IconProps) => {
  const { size = 1, color = '#07236D' } = props;
  const width = `${Math.ceil(15 * size)}`;
  const height = `${Math.ceil(15 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='7.5' cy='7.5' r='7.5' fill={color} />
    </svg>
  );
};

export default Circle;
