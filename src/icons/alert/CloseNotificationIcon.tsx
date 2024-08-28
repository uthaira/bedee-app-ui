const CloseNotificationIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.45" filter="url(#filter0_b_1570_11390)">
        <circle cx="9.5" cy="9.5" r="9.5" fill="#1F1F1F" />
      </g>
      <path
        d="M6.47729 6.47728L12.5227 12.5227M6.47729 12.5227L12.5227 6.47728L6.47729 12.5227Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1570_11390"
          x="-4"
          y="-4"
          width="27"
          height="27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1570_11390"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1570_11390"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CloseNotificationIcon;
