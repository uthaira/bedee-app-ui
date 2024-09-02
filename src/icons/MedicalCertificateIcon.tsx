type IconProps = {
  size?: number;
  color?: string;
};

const MedicalCertificateIcon = (props: IconProps) => {
  const { size = 1 } = props;
  const width = `${Math.ceil(32 * size)}`;
  const height = `${Math.ceil(32 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_3287_2214)'>
        <path
          d='M24.5337 6.39844V28.7984H6.40039V6.39844H9.69736L15.4671 7.99844L21.2368 6.39844H24.5337Z'
          fill='#317DF6'
        />
        <path
          d='M21.1782 4.84131V6.48339L15.4309 8.12548L9.68359 6.48339V4.84131H12.9678C12.969 4.40617 13.1424 3.98921 13.4501 3.68153C13.7578 3.37384 14.1747 3.20044 14.6099 3.19922H16.2519C16.6871 3.20044 17.104 3.37384 17.4117 3.68153C17.7194 3.98921 17.8928 4.40617 17.894 4.84131H21.1782Z'
          fill='#ED6742'
        />
        <path
          d='M9.68359 6.48242H21.1782V8.12451H9.68359V6.48242Z'
          fill='#081F7B'
        />
        <path
          d='M19.7335 11.7324C19.3436 11.7326 18.9678 11.8807 18.6794 12.1477L18.6752 12.1434L18.1334 12.6576L17.592 12.1434L17.5875 12.1477C17.2991 11.8806 16.9233 11.7326 16.5334 11.7324C15.6498 11.7324 14.9336 12.4825 14.9336 13.408C14.9336 15.0893 16.8127 16.3925 18.1337 17.0658C19.5326 16.3526 21.3336 15.1997 21.3336 13.4062C21.3336 12.4831 20.6174 11.7324 19.7335 11.7324Z'
          fill='white'
        />
        <rect
          x='9.59961'
          y='19.1992'
          width='11.7333'
          height='2.13333'
          fill='#081F7B'
        />
        <rect
          x='9.59961'
          y='22.3984'
          width='11.7333'
          height='2.13333'
          fill='#081F7B'
        />
      </g>
      <defs>
        <clipPath id='clip0_3287_2214'>
          <rect
            width='27.7333'
            height='26.2734'
            fill='white'
            transform='translate(2.13281 3.19922)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MedicalCertificateIcon;
