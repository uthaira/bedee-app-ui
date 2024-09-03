interface IconProps {
  size?: number;
  color?: string;
}

const SuccessNotificationIcon = (props: IconProps) => {
  const { size = 1, color = '#20AB7C' } = props;
  const width = `${Math.ceil(36 * size)}`;
  const height = `${Math.ceil(36 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9724 23.6662C30.6508 22.0283 31 20.2728 31 18.5C31 14.9196 29.5777 11.4858 27.0459 8.95406C24.5142 6.42232 21.0804 5 17.5 5C13.9196 5 10.4858 6.42232 7.95406 8.95406C5.42232 11.4858 4 14.9196 4 18.5C4 20.2728 4.34919 22.0283 5.02763 23.6662C5.70606 25.3041 6.70047 26.7923 7.95406 28.0459C9.20765 29.2995 10.6959 30.2939 12.3338 30.9724C13.9717 31.6508 15.7272 32 17.5 32C19.2728 32 21.0283 31.6508 22.6662 30.9724C24.3041 30.2939 25.7923 29.2995 27.0459 28.0459C28.2995 26.7923 29.2939 25.3041 29.9724 23.6662Z"
        fill={color}
      />
      <path
        d="M13 19.0413L16.244 22.0825L22.732 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SuccessNotificationIcon;
