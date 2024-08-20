import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

const EditIcon = (props: IconProps) => {
  const { size = 1, color = "white" } = props;
  const width = `${Math.ceil(18 * size)}`;
  const height = `${Math.ceil(19 * size)}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      {...props}
    >
      <path
        d="M11.3035 4.32343L13.8404 7.00135M12.3797 3.18743C12.7161 2.83231 13.1724 2.63281 13.6482 2.63281C14.1239 2.63281 14.5802 2.83231 14.9166 3.18743C15.2531 3.54254 15.4421 4.02418 15.4421 4.52639C15.4421 5.0286 15.2531 5.51024 14.9166 5.86535L5.0385 16.2923H2.52734V13.5871L12.3797 3.18743Z"
        stroke={color}
        strokeWidth="1.45408"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
