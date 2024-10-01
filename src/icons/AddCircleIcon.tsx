type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const AddCircleIcon = (props: IconProps) => {
  const { width = 29, height = 29, color = '#1E6AF6' } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
      <path d="M14.5 9.75V14.5M14.5 14.5V19.25M14.5 14.5H19.25M14.5 14.5H9.75" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

export default AddCircleIcon;
