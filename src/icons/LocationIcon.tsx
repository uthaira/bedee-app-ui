type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const LocationIcon = (props: IconProps) => {
  const { width = 29, height = 29, color = '#1E6AF6' } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5296 21.4998C15.89 20.2294 20.041 16.1267 20.041 13.362C20.041 10.0555 17.3827 7.375 14.1035 7.375C10.8243 7.375 8.16602 10.0555 8.16602 13.362C8.16602 16.1267 12.3171 20.2294 13.6775 21.4998C13.9199 21.7261 14.2871 21.7261 14.5296 21.4998ZM14.1035 15.9514C15.5609 15.9514 16.7424 14.7699 16.7424 13.3125C16.7424 11.8551 15.5609 10.6736 14.1035 10.6736C12.6461 10.6736 11.4646 11.8551 11.4646 13.3125C11.4646 14.7699 12.6461 15.9514 14.1035 15.9514Z" fill="white"/>
    </svg>
    
  );
};

export default LocationIcon;
