interface IconProps {
  size?: number;
}

const IdCardVerified = (props: IconProps) => {
  const { size = 1 } = props;
  const width = `${Math.ceil(197 * size)}`;
  const height = `${Math.ceil(101 * size)}`;

  return (
    <svg width={width} height={height} viewBox="0 0 197 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M155.086 0H9.53965C4.62054 0 0.632812 3.75756 0.632812 8.39274V91.8961C0.632812 96.5313 4.62054 100.289 9.53965 100.289H155.086C160.005 100.289 163.993 96.5313 163.993 91.8961V8.39274C163.993 3.75756 160.005 0 155.086 0Z" fill="#E8F0FE"/>
      <path d="M45.6383 83.4067C38.2468 83.4067 30.852 83.2664 23.4705 83.4566C18.5605 83.5844 15.4305 79.7154 16.3239 75.3849C19.3016 60.9502 33.0059 51.0672 48.5995 52.3361C61.887 53.4242 73.5665 63.9369 75.201 76.286C75.7105 80.1207 72.8154 83.3599 68.7061 83.388C61.0201 83.4379 53.3342 83.388 45.6449 83.388L45.6383 83.4067Z" fill="#849CDD"/>
      <path d="M45.6304 47.9661C42.3685 47.9482 39.1852 47.021 36.4816 45.3013C33.778 43.5816 31.6752 41.1464 30.4379 38.3024C29.2006 35.4584 28.8844 32.333 29.529 29.32C30.1736 26.3069 31.7502 23.5411 34.0602 21.3709C36.3702 19.2008 39.3101 17.7234 42.5096 17.1251C45.7091 16.5267 49.025 16.834 52.0395 18.0084C55.0539 19.1827 57.6321 21.1715 59.449 23.7242C61.266 26.2769 62.2404 29.2792 62.2496 32.3529C62.2509 34.4075 61.8216 36.4422 60.9863 38.3401C60.1509 40.238 58.9261 41.9617 57.3819 43.4124C55.8378 44.8631 54.0047 46.0121 51.9881 46.7936C49.9715 47.575 47.8109 47.9735 45.6304 47.9661Z" fill="#849CDD"/>
      <path d="M123.486 32.6798C128.524 32.6798 133.564 32.6798 138.607 32.6798C142.498 32.6798 145.403 35.1989 145.499 38.6034C145.598 42.1669 142.875 45.0507 139.007 45.085C128.635 45.1692 103.8 45.1661 93.4275 45.085C89.5464 45.0538 86.8466 42.2292 86.9194 38.6315C86.9856 35.202 89.8641 32.6705 93.7583 32.6611C98.847 32.6736 118.398 32.6798 123.486 32.6798Z" fill="#849CDD"/>
      <path d="M101.328 55.1457C103.822 55.1457 120.776 55.1145 123.27 55.1457C127.122 55.2049 129.888 57.671 129.984 61.0848C130.09 64.6483 127.549 67.3919 123.654 67.4979C118.327 67.6413 98.5285 67.6444 93.2149 67.4979C89.3272 67.3856 86.8325 64.6421 86.9285 61.0412C87.0211 57.7302 89.807 55.2548 93.5457 55.1519H93.8401L101.328 55.1457Z" fill="#A5C3FB"/>
      <circle cx="170.837" cy="64.4303" r="14.696" fill="white"/>
      <path d="M171.133 42C177.287 47.5215 185.379 50.3762 193.635 49.9378C194.286 52.4549 194.633 55.0921 194.633 57.8129C194.633 72.4142 184.648 84.6812 171.133 88.1592C157.618 84.6812 147.633 72.4116 147.633 57.8129C147.631 55.1562 147.966 52.51 148.63 49.9378C156.886 50.3762 164.979 47.5215 171.133 42Z" fill="#20AB7C"/>
      <path d="M163.299 65.6462L168.522 70.8684L178.966 60.424M193.635 49.9378C185.379 50.3762 177.287 47.5215 171.133 42C164.979 47.5215 156.886 50.3762 148.63 49.9378C147.966 52.51 147.631 55.1562 147.633 57.8129C147.633 72.4116 157.618 84.6812 171.133 88.1592C184.648 84.6812 194.633 72.4142 194.633 57.8129C194.633 55.0921 194.286 52.4549 193.635 49.9378Z" stroke="#8ED1AE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M163.301 65.646L168.523 70.8683L178.967 60.4238" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default IdCardVerified;