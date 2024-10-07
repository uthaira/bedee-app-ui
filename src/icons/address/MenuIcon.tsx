interface IconProps {
  size?: number;
}

export default function AddressMenuIcon(props: IconProps) {
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
      <rect width='32' height='32' rx='16' fill='#EAEEF6' />
      <path
        d='M16 9L16 9.01M16 16L16 16.01M16 23L16 23.01M16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10ZM16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17ZM16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23C17 23.5523 16.5523 24 16 24Z'
        stroke='#939CA9'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
