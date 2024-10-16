interface IconProps {
  size?: number;
  color?: string;
}
export default function MapOutlineIcon(props: IconProps) {
  const { size = 1, color = '#323A43' } = props;
  const width = `${Math.ceil(25 * size)}`;
  const height = `${Math.ceil(24 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M13.4664 19.81C14.9557 18.3881 19.5 13.7958 19.5 10.7013C19.5 7.00026 16.5899 4 13 4C9.41015 4 6.5 7.00026 6.5 10.7013C6.5 13.7958 11.0443 18.3881 12.5336 19.8099C12.799 20.0633 13.201 20.0633 13.4664 19.81ZM13 13.5996C14.5955 13.5996 15.8889 12.2772 15.8889 10.6459C15.8889 9.01459 14.5955 7.69216 13 7.69216C11.4045 7.69216 10.1111 9.01459 10.1111 10.6459C10.1111 12.2772 11.4045 13.5996 13 13.5996Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
