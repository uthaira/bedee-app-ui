interface IconProps {
  size?: number;
  color?: string;
}

export default function AddressDefaultIcon(props: IconProps) {
  const { size = 1, color = '#EE6E3A' } = props;
  const width = `${Math.ceil(16 * size)}`;
  const height = `${Math.ceil(21 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.66947 1.00345C0.240816 1.43211 0 2.01349 0 2.6197V20.9054L8 16.9054L16 20.9054V2.6197C16 2.01349 15.7592 1.43211 15.3305 1.00345C14.9019 0.5748 14.3205 0.333984 13.7143 0.333984H2.28571C1.67951 0.333984 1.09812 0.5748 0.66947 1.00345Z'
        fill={color}
      />
    </svg>
  );
}
