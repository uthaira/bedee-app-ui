import React from 'react';

type IconProps = {
  size?: number;
};

const LineIcon = ({ size = 24 }: IconProps) => {
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
      <g clipPath="url(#clip0_1026_49077)">
        <path
          d="M17.4913 1.99951H6.50875C4.01864 1.99951 2 4.01815 2 6.50826V17.4908C2 19.9809 4.01864 21.9995 6.50875 21.9995H17.4913C19.9814 21.9995 22 19.9809 22 17.4908V6.50826C22 4.01815 19.9814 1.99951 17.4913 1.99951Z"
          fill="#06C755"
        />
        <path
          d="M18.6663 11.0572C18.6663 8.0735 15.6751 5.646 11.9982 5.646C8.32133 5.646 5.33008 8.0735 5.33008 11.0572C5.33008 13.7322 7.70508 15.9729 10.9063 16.396C11.1238 16.4429 11.4195 16.5391 11.4938 16.7247C11.5613 16.8935 11.5382 17.1579 11.5157 17.3279C11.5157 17.3279 11.4376 17.7985 11.4207 17.8985C11.3913 18.0672 11.2863 18.5579 11.9982 18.2585C12.7101 17.9591 15.8382 15.9972 17.237 14.3866C18.2032 13.3272 18.6663 12.2497 18.6663 11.0572Z"
          fill="white"
        />
        <path
          d="M16.4473 12.78H14.5723C14.5391 12.78 14.5073 12.7668 14.4839 12.7434C14.4604 12.7199 14.4473 12.6881 14.4473 12.655V9.74561C14.4473 9.71245 14.4604 9.68066 14.4839 9.65722C14.5073 9.63377 14.5391 9.62061 14.5723 9.62061H16.4473C16.4804 9.62061 16.5122 9.63377 16.5357 9.65722C16.5591 9.68066 16.5723 9.71245 16.5723 9.74561V10.2187C16.5723 10.2519 16.5591 10.2837 16.5357 10.3071C16.5122 10.3306 16.4804 10.3437 16.4473 10.3437H15.1741V10.8344H16.4473C16.4804 10.8344 16.5122 10.8475 16.5357 10.871C16.5591 10.8944 16.5723 10.9262 16.5723 10.9594V11.4369C16.5723 11.47 16.5591 11.5018 16.5357 11.5252C16.5122 11.5487 16.4804 11.5619 16.4473 11.5619H15.1741V12.0531H16.4473C16.4804 12.0531 16.5122 12.0663 16.5357 12.0897C16.5591 12.1132 16.5723 12.145 16.5723 12.1781V12.6506C16.5729 12.6674 16.5701 12.6841 16.564 12.6998C16.558 12.7155 16.5489 12.7298 16.5372 12.7418C16.5256 12.7539 16.5116 12.7635 16.4961 12.7701C16.4807 12.7766 16.4641 12.78 16.4473 12.78Z"
          fill="#06C755"
        />
        <path
          d="M9.51766 12.7801C9.55081 12.7801 9.5826 12.7669 9.60605 12.7435C9.62949 12.7201 9.64266 12.6883 9.64266 12.6551V12.1826C9.64266 12.1495 9.62949 12.1177 9.60605 12.0942C9.5826 12.0708 9.55081 12.0576 9.51766 12.0576H8.24453V9.74512C8.24453 9.71197 8.23136 9.68017 8.20792 9.65673C8.18448 9.63329 8.15268 9.62012 8.11953 9.62012H7.64453C7.61138 9.62012 7.57958 9.63329 7.55614 9.65673C7.5327 9.68017 7.51953 9.71197 7.51953 9.74512V12.6532C7.51953 12.6864 7.5327 12.7182 7.55614 12.7416C7.57958 12.7651 7.61138 12.7782 7.64453 12.7782H9.51953L9.51766 12.7801Z"
          fill="#06C755"
        />
        <path
          d="M10.6459 9.61523H10.1734C10.103 9.61523 10.0459 9.67232 10.0459 9.74273V12.6527C10.0459 12.7232 10.103 12.7802 10.1734 12.7802H10.6459C10.7163 12.7802 10.7734 12.7232 10.7734 12.6527V9.74273C10.7734 9.67232 10.7163 9.61523 10.6459 9.61523Z"
          fill="#06C755"
        />
        <path
          d="M13.8647 9.61523H13.3922C13.3591 9.61523 13.3273 9.6284 13.3038 9.65185C13.2804 9.67529 13.2672 9.70708 13.2672 9.74023V11.469L11.936 9.67086C11.9329 9.6661 11.9294 9.6617 11.9254 9.65773L11.9179 9.65023L11.911 9.64461H11.9072L11.9004 9.63961H11.8966L11.8897 9.63586H11.8854H11.8785H11.8741H11.8666H11.8616H11.8541H11.8491H11.8422H11.3604C11.3272 9.63586 11.2954 9.64903 11.272 9.67247C11.2485 9.69591 11.2354 9.72771 11.2354 9.76086V12.6709C11.2354 12.704 11.2485 12.7358 11.272 12.7592C11.2954 12.7827 11.3272 12.7959 11.3604 12.7959H11.8335C11.8666 12.7959 11.8984 12.7827 11.9219 12.7592C11.9453 12.7358 11.9585 12.704 11.9585 12.6709V10.9252L13.2916 12.7252C13.3003 12.738 13.3114 12.749 13.3241 12.7577L13.3316 12.7627H13.3354L13.3416 12.7659H13.3479H13.3522H13.361C13.372 12.7686 13.3833 12.7701 13.3947 12.7702H13.8647C13.8979 12.7702 13.9297 12.7571 13.9531 12.7336C13.9766 12.7102 13.9897 12.6784 13.9897 12.6452V9.74273C13.9901 9.72611 13.9871 9.70959 13.9809 9.69413C13.9748 9.67868 13.9657 9.6646 13.954 9.65273C13.9424 9.64085 13.9285 9.63142 13.9131 9.62498C13.8978 9.61855 13.8814 9.61523 13.8647 9.61523Z"
          fill="#06C755"
        />
      </g>
      <defs>
        <clipPath id="clip0_1026_49077">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 1.99951)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LineIcon;