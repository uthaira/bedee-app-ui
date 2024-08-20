import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

const CalendarIcon = (props: IconProps) => {
  const { size = 1, color = "#003CDE" } = props;
  const width = `${Math.ceil(23 * size)}`;
  const height = `${Math.ceil(23 * size)}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91899 6.93207V3.29688M15.1894 6.93207V3.29688M7.01019 10.5673H16.0982M5.1926 19.6552H17.9158C18.3978 19.6552 18.8601 19.4637 19.201 19.1229C19.5419 18.782 19.7334 18.3197 19.7334 17.8376V6.93207C19.7334 6.45001 19.5419 5.9877 19.201 5.64683C18.8601 5.30597 18.3978 5.11447 17.9158 5.11447H5.1926C4.71054 5.11447 4.24823 5.30597 3.90736 5.64683C3.5665 5.9877 3.375 6.45001 3.375 6.93207V17.8376C3.375 18.3197 3.5665 18.782 3.90736 19.1229C4.24823 19.4637 4.71054 19.6552 5.1926 19.6552Z"
        stroke={color}
        strokeWidth="1.45408"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarIcon;
