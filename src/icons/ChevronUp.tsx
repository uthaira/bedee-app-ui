type IconProps = {
  width?: number
  height?: number
  color?: string
}

const ChevronUpIcon = (props: IconProps) => {
  const { width = 24, height = 24, color = '#939CA9' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4343 7.43451C11.7467 7.12209 12.2532 7.12209 12.5656 7.43451L19.5656 14.4345C19.8781 14.7469 19.8781 15.2535 19.5656 15.5659C19.2532 15.8783 18.7467 15.8783 18.4343 15.5659L12 9.13157L5.56564 15.5659C5.25322 15.8783 4.74669 15.8783 4.43427 15.5659C4.12185 15.2535 4.12185 14.7469 4.43427 14.4345L11.4343 7.43451Z"
        stroke={color}
        fill="#939CA9"
      />
    </svg>
  )
}

export default ChevronUpIcon
