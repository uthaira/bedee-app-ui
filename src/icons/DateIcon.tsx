type IconProps = {
  size?: number;
  color?: string;
};

const CalendarIcon = (props: IconProps) => {
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
      <path
        d='M5.33398 10.7988H26.6673V26.7988H5.33398V10.7988Z'
        fill='#317DF6'
      />
      <path
        d='M5.33398 6.79883H26.6673V12.1322H5.33398V6.79883Z'
        fill='#ED6742'
      />
      <path
        d='M8.80013 6.79883H7.4668C7.4668 8.27158 8.66071 9.46549 10.1335 9.46549V8.13216C9.39705 8.13216 8.80013 7.53516 8.80013 6.79883Z'
        fill='#081F7B'
      />
      <path
        d='M10.1335 4.13281C8.66071 4.13281 7.4668 5.32665 7.4668 6.79948H8.80013C8.80013 6.06306 9.39705 5.46615 10.1335 5.46615C10.8699 5.46615 11.4668 6.06306 11.4668 6.79948H12.8001C12.8001 5.32665 11.6062 4.13281 10.1335 4.13281Z'
        fill='#317DF6'
      />
      <path
        d='M20.5345 6.79883H19.2012C19.2012 8.27158 20.3951 9.46549 21.8678 9.46549V8.13216C21.1314 8.13216 20.5345 7.53516 20.5345 6.79883Z'
        fill='#081F7B'
      />
      <path
        d='M21.8678 4.13281C20.3951 4.13281 19.2012 5.32665 19.2012 6.79948H20.5345C20.5345 6.06306 21.1314 5.46615 21.8678 5.46615C22.6043 5.46615 23.2012 6.06306 23.2012 6.79948H24.5345C24.5345 5.32665 23.3406 4.13281 21.8678 4.13281Z'
        fill='#317DF6'
      />
      <path
        d='M14.6673 6.79883H13.334C13.334 8.27158 14.5279 9.46549 16.0007 9.46549V8.13216C15.2642 8.13216 14.6673 7.53516 14.6673 6.79883Z'
        fill='#081F7B'
      />
      <path
        d='M16.0007 4.13281C14.5279 4.13281 13.334 5.32665 13.334 6.79948H14.6673C14.6673 6.06306 15.2642 5.46615 16.0007 5.46615C16.7371 5.46615 17.334 6.06306 17.334 6.79948H18.6673C18.6673 5.32665 17.4734 4.13281 16.0007 4.13281Z'
        fill='#317DF6'
      />
      <path
        d='M5.33398 10.7988H26.6673V12.1322H5.33398V10.7988Z'
        fill='#081F7B'
      />
      <path
        d='M15.7042 14.873C13.2496 14.873 11.2598 16.8629 11.2598 19.3175C11.2598 21.7721 13.2496 23.7619 15.7042 23.7619C18.1588 23.7619 20.1487 21.7721 20.1487 19.3175C20.1487 16.8629 18.1588 14.873 15.7042 14.873ZM16.2598 19.873H13.482V18.7619H15.1487V16.5397H16.2598V19.873Z'
        fill='white'
      />
    </svg>
  );
};

export default CalendarIcon;
