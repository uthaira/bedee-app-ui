type IconProps = {
  width?: number;
  height?: number
  color?: string;
};

const ChevronRightIcon = (props: IconProps) => {
  const { width = 24, height = 24, color = "#939CA9" } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.49219 5.22754L14.7647 11.5001L8.49219 17.7726" stroke={color} strokeWidth="1.34411" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};

export default ChevronRightIcon;
