interface IconProps {
  size?: number;
  color?: string;
}

const ArrowLeftIcon = (props: IconProps) => {
  const { size = 1, color = '#323A43' } = props;
  const width = `${Math.ceil(28 * size)}`;
  const height = `${Math.ceil(22 * size)}`;

  return (
    <svg width={width} height={height} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0878 0.912029C12.5044 1.32859 12.5044 2.00396 12.0878 2.42052L4.57542 9.93294H26.0003C26.5894 9.93294 27.0669 10.4105 27.0669 10.9996C27.0669 11.5887 26.5894 12.0663 26.0003 12.0663H4.57542L12.0878 19.5787C12.5044 19.9953 12.5044 20.6706 12.0878 21.0872C11.6713 21.5037 10.9959 21.5037 10.5793 21.0872L1.24601 11.7539C0.829454 11.3373 0.829454 10.6619 1.24601 10.2454L10.5793 0.912029C10.9959 0.49547 11.6713 0.49547 12.0878 0.912029Z" fill={color} />
    </svg>
  )
}

export default ArrowLeftIcon;