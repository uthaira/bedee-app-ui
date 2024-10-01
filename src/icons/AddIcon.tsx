type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const AddIcon = (props: IconProps) => {
  const { width = 16, height = 16, color = '#1E6AF6' } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon">
        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M8.00013 3.46875C8.29468 3.46875 8.53346 3.70753 8.53346 4.00208V7.46875H12.0001C12.2947 7.46875 12.5335 7.70753 12.5335 8.00208C12.5335 8.29664 12.2947 8.53542 12.0001 8.53542H8.53346V12.0021C8.53346 12.2966 8.29468 12.5354 8.00013 12.5354C7.70558 12.5354 7.4668 12.2966 7.4668 12.0021V8.53542H4.00013C3.70558 8.53542 3.4668 8.29664 3.4668 8.00208C3.4668 7.70753 3.70558 7.46875 4.00013 7.46875H7.4668V4.00208C7.4668 3.70753 7.70558 3.46875 8.00013 3.46875Z" fill={color} />
      </g>
    </svg>
  );
};

export default AddIcon;
