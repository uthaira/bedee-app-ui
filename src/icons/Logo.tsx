type LogoProps = {
  size?: number;
};
const Logo = (props: LogoProps) => {
  const { size = 1 } = props;
  const width = `${Math.ceil(31 * size)}`;
  const height = `${Math.ceil(29 * size)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 31 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 12H18V29H3.37684C2.93351 29.0003 2.49446 28.9181 2.08478 28.758C1.6751 28.5979 1.30284 28.3631 0.989241 28.067C0.675638 27.7709 0.426837 27.4192 0.257102 27.0322C0.0873679 26.6452 -1.38739e-07 26.2303 0 25.8114V12Z'
        fill='#081288'
      />
      <path
        d='M0.00133446 12V8.80244C-0.0192427 7.65369 0.198337 6.5125 0.641323 5.44544C1.08431 4.37838 1.74385 3.40682 2.58149 2.58744C3.41913 1.76807 4.4181 1.11727 5.5201 0.673032C6.6221 0.228792 7.80508 0 9.00002 0C10.195 0 11.3779 0.228792 12.4799 0.673032C13.5819 1.11727 14.5809 1.76807 15.4185 2.58744C16.2562 3.40682 16.9157 4.37838 17.3587 5.44544C17.8017 6.5125 18.0192 7.65369 17.9987 8.80244V12H0.00133446Z'
        fill='#007AFF'
      />
      <path
        d='M18 12H21.496C24.0166 12 26.434 12.8955 28.2163 14.4896C29.9987 16.0837 31 18.2457 31 20.5C31 22.7543 29.9987 24.9163 28.2163 26.5104C26.434 28.1045 24.0166 29 21.496 29H18V12Z'
        fill='#FF3500'
      />
    </svg>
  );
};

export default Logo;