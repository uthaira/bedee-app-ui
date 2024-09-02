import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

const TrashbinIcon = (props: IconProps) => {
  const { size = 1, color = "#003CDE" } = props;
  const width = `${Math.ceil(15 * size)}`;
  const height = `${Math.ceil(17 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.84692 7.78287V12.6298M9.0782 7.78287V12.6298M1 4.55159H13.9251M13.1173 4.55159L12.4169 14.3601C12.3879 14.7678 12.2055 15.1492 11.9065 15.4277C11.6074 15.7062 11.214 15.8611 10.8053 15.8611H4.1198C3.71116 15.8611 3.31769 15.7062 3.01865 15.4277C2.71961 15.1492 2.53721 14.7678 2.5082 14.3601L1.80782 4.55159H13.1173ZM9.88602 4.55159V2.12813C9.88602 1.91389 9.80091 1.70841 9.64942 1.55692C9.49792 1.40542 9.29245 1.32031 9.0782 1.32031H5.84692C5.63267 1.32031 5.4272 1.40542 5.27571 1.55692C5.12421 1.70841 5.0391 1.91389 5.0391 2.12813V4.55159H9.88602Z"
        stroke={color}
        strokeWidth="1.18144"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashbinIcon;
