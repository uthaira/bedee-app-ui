type IconProps = {
  size?: number;
  color?: string;
};

const UploadIcon = (props: IconProps) => {
  const { size = 1, color = '#3A4248' } = props;
  const width = `${Math.ceil(21 * size)}`;
  const height = `${Math.ceil(20 * size)}`;

  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83398 13.334V14.1673C3.83398 14.8304 4.09738 15.4662 4.56622 15.9351C5.03506 16.4039 5.67094 16.6673 6.33398 16.6673H14.6673C15.3304 16.6673 15.9662 16.4039 16.4351 15.9351C16.9039 15.4662 17.1673 14.8304 17.1673 14.1673V13.334M13.834 6.66732L10.5007 3.33398M10.5007 3.33398L7.16732 6.66732M10.5007 3.33398V13.334" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default UploadIcon;