type IconProps = {
  size?: number;
  color?: string;
};

const Del = (props:IconProps) => {
  const { size = 1, color = 'white' } = props
  const width = `${Math.ceil(41 * size)}`
  const height = `${Math.ceil(41 * size)}`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z"
        stroke={color}
        strokeWidth="1.82472"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Del
