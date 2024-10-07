interface IconProps {
  size?: number;
  color?: string;
}

export default function MapPinIcon(props: IconProps) {
  const { size = 1, color = '#4A5568' } = props;
  const width = `${Math.ceil(13 * size)}`;
  const height = `${Math.ceil(16 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 13 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.9664 15.8099C8.45569 14.388 13 9.79582 13 6.70127C13 3.00026 10.0899 0 6.5 0C2.91015 0 0 3.00026 0 6.70127C0 9.79582 4.54431 14.388 6.0336 15.8099C6.29901 16.0633 6.70099 16.0633 6.9664 15.8099ZM6.5 9.59962C8.09549 9.59962 9.38889 8.27719 9.38889 6.64589C9.38889 5.01459 8.09549 3.69216 6.5 3.69216C4.90451 3.69216 3.61111 5.01459 3.61111 6.64589C3.61111 8.27719 4.90451 9.59962 6.5 9.59962Z'
        fill={color}
      />
    </svg>
  );
}
