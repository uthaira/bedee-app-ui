interface IconProps {
  size?: number;
  color?: string;
}

export default function PencilOutlineIcon(props: IconProps) {
  const { size = 1, color = '#fff' } = props;
  const width = `${Math.ceil(20 * size)}`;
  const height = `${Math.ceil(20 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.5002 1.79922C16.0492 1.79922 15.6168 1.97836 15.2979 2.29723L14.3636 3.23155L16.7682 5.63618L17.7025 4.70186C18.0214 4.38299 18.2005 3.9505 18.2005 3.49955C18.2005 3.04859 18.0214 2.61611 17.7025 2.29723C17.3836 1.97836 16.9511 1.79922 16.5002 1.79922ZM18.8339 5.83323C19.4528 5.2143 19.8005 4.37485 19.8005 3.49955C19.8005 2.62425 19.4528 1.78479 18.8339 1.16586C18.2149 0.546931 17.3755 0.199219 16.5002 0.199219C15.6249 0.199219 14.7854 0.546931 14.1665 1.16586L12.667 2.66538C12.6668 2.66554 12.6672 2.66522 12.667 2.66538C12.6668 2.66554 12.6662 2.66618 12.666 2.66635L0.43451 14.8979C0.284481 15.0479 0.200195 15.2514 0.200195 15.4635V19.0355C0.200195 19.4774 0.558367 19.8355 1.0002 19.8355H4.5002C4.71237 19.8355 4.91585 19.7513 5.06588 19.6012L18.8339 5.83323ZM15.6368 6.76755L13.2322 4.36292L1.8002 15.7949V18.2355H4.16882L15.6368 6.76755Z'
        fill={color}
      />
    </svg>
  );
}