import React from "react";
type IconProps = {
  size?: number;
  color?: string;
};

const DocumentText = (props: IconProps) => {
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
    >
      <path
        d="M9 12.5273H15M9 16.5273H15M17 21.5273H7C6.46957 21.5273 5.96086 21.3166 5.58579 20.9416C5.21071 20.5665 5 20.0578 5 19.5273V5.52734C5 4.99691 5.21071 4.4882 5.58579 4.11313C5.96086 3.73806 6.46957 3.52734 7 3.52734H12.586C12.8512 3.5274 13.1055 3.63279 13.293 3.82034L18.707 9.23434C18.8945 9.42184 18.9999 9.67615 19 9.94134V19.5273C19 20.0578 18.7893 20.5665 18.4142 20.9416C18.0391 21.3166 17.5304 21.5273 17 21.5273Z"
        stroke={color}
        strokeWidth="1.83467"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentText;
