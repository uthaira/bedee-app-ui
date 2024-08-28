type IconProps = {
  size?: number;
  color?: string;
};
const Icon = (props: IconProps) => {
  const { size = 29, color = '#1E6AF6' } = props;
  const width = size;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 29 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1565_44208)'>
        <rect y='0.5' width='29' height='29' rx='14.5' fill={color} />
        <path
          d='M6.82422 13.296H22.1772M10.236 17.5607H11.0889M14.5007 17.5607H15.3536M9.38304 20.9724H19.6183C20.297 20.9724 20.9478 20.7028 21.4277 20.223C21.9076 19.7431 22.1772 19.0922 22.1772 18.4136V11.5901C22.1772 10.9114 21.9076 10.2606 21.4277 9.78071C20.9478 9.30084 20.297 9.03125 19.6183 9.03125H9.38304C8.7044 9.03125 8.05355 9.30084 7.57368 9.78071C7.09381 10.2606 6.82422 10.9114 6.82422 11.5901V18.4136C6.82422 19.0922 7.09381 19.7431 7.57368 20.223C8.05355 20.7028 8.7044 20.9724 9.38304 20.9724Z'
          stroke='white'
          stroke-width='1.36471'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1565_44208'>
          <rect
            width='29'
            height='29'
            fill='white'
            transform='translate(0 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
