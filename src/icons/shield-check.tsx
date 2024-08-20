import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

const ShieldCheckIcon = (props: IconProps) => {
  const { size = 1, color = "black" } = props;
  const width = `${Math.ceil(24 * size)}`;
  const height = `${Math.ceil(25 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 12.5247L11 14.5247L15 10.5247M20.618 6.50875C17.4561 6.67667 14.3567 5.58336 12 3.46875C9.64327 5.58336 6.5439 6.67667 3.382 6.50875C3.12754 7.49386 2.99918 8.5073 3 9.52475C3 15.1157 6.824 19.8147 12 21.1467C17.176 19.8147 21 15.1167 21 9.52475C21 8.48275 20.867 7.47275 20.618 6.50875Z"
        stroke={color}
        strokeWidth="1.83467"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckIcon;
