import React from "react";
type IconProps = {
  size?: number;
  color?: string;
};

const PhoneOutgoingIcon = (props: IconProps) => {
  const { size = 1, color = "#3A4248" } = props;
  const width = `${Math.ceil(24 * size)}`;
  const height = `${Math.ceil(24 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 3H21M21 3V8M21 3L15 9M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V6C3 14.284 9.716 21 18 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.72C20.9998 15.5102 20.9337 15.3058 20.8109 15.1356C20.6882 14.9655 20.515 14.8383 20.316 14.772L15.823 13.274C15.5947 13.1981 15.3466 13.2071 15.1244 13.2993C14.9021 13.3915 14.7205 13.5607 14.613 13.776L13.483 16.033C11.0343 14.9264 9.07312 12.9649 7.967 10.516L10.224 9.388C10.4393 9.28045 10.6085 9.0989 10.7007 8.87665C10.7929 8.65439 10.8019 8.40634 10.726 8.178L9.228 3.683C9.16148 3.48398 9.03404 3.31093 8.86372 3.18835C8.6934 3.06577 8.48884 2.99988 8.279 3H5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PhoneOutgoingIcon;
