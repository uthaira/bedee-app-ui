interface IconProps {
  size?: number;
}

export default function KycPermissionIcon(props: IconProps) {
  const { size = 1 } = props;
  const width = `${Math.ceil(267 * size)}`;
  const height = `${Math.ceil(171 * size)}`;

  return (
    <svg width={width} height={height} viewBox="0 0 267 171" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22.4033" y="41.1113" width="208.098" height="129.888" rx="64.9442" fill="#F0F6FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M219.648 31.7691C219.929 29.0219 217.928 26.5685 215.181 26.2892L60.586 10.5729C57.8387 10.2936 55.3846 12.2942 55.1046 15.0414L44.2 122.021C43.92 124.768 45.92 127.221 48.6673 127.501L203.263 143.217C206.01 143.496 208.464 141.496 208.744 138.748L219.648 31.7691ZM144.902 34.8117C143.804 34.6972 142.82 35.4949 142.705 36.5935L136.927 91.8816C136.813 92.9802 137.61 93.9636 138.709 94.0781L186.467 99.0559C187.566 99.1704 188.549 98.3726 188.664 97.274L194.442 41.986C194.557 40.8874 193.759 39.904 192.661 39.7895L144.902 34.8117Z" fill="#C1E1FE"/>
      <path d="M149.33 81.333C142.501 82.7285 135.779 87.015 134 88.0404C137.887 91.4826 139.319 98.4715 163.108 103.937C177.389 107.217 192.88 97.1903 195.676 90.1317C188.553 86.424 160.781 78.9927 149.33 81.333Z" fill="#317DF6"/>
      <path d="M178.577 76.548C169.187 81.9621 153.594 83.3745 146.972 83.404C147.032 79.817 147.604 70.9623 149.408 64.2387C151.663 55.8343 155.376 48.7208 161.553 45.8697C167.729 43.0187 176.498 44.5666 181.975 50.434C187.58 56.438 190.314 69.7803 178.577 76.548Z" fill="#3A4248"/>
      <path d="M174.385 61.9132C173.809 55.9939 167.383 51.0317 164.242 49.2905C161.602 51.2863 156.039 57.004 154.909 63.9076C153.778 70.8113 160.228 74.3388 163.594 75.2396L162.241 80.2822L159.265 81.2875C158.693 90.1423 161.218 90.8179 160.993 91.6583C160.812 92.3307 169.604 86.4562 174.023 83.4349L169.424 80.4029L171.679 71.9985C172.356 69.4772 174.49 68.2467 176.398 67.8566C178.307 67.4666 181.959 63.94 178.202 61.1331C174.446 58.3263 175.106 69.3123 174.385 61.9132Z" fill="#FB9FB5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M219.966 28.3363C220.246 25.5891 218.246 23.1357 215.498 22.8564L60.6071 7.11001C57.8598 6.83072 55.4057 8.83135 55.1257 11.5785L44.493 115.891C44.2129 118.638 46.213 121.092 48.9603 121.371L203.851 137.117C206.599 137.397 209.053 135.396 209.333 132.649L219.966 28.3363ZM144.901 33.0717C143.803 32.9572 142.819 33.755 142.704 34.8535L136.926 90.1416C136.811 91.2402 137.609 92.2236 138.708 92.3381L186.466 97.3159C187.565 97.4304 188.548 96.6326 188.663 95.534L194.441 40.246C194.556 39.1474 193.758 38.164 192.66 38.0495L144.901 33.0717Z" fill="#C1E1FE"/>
      <rect width="57.2488" height="12.667" rx="4" transform="matrix(0.99481 0.101749 -0.102018 0.994783 70.5117 33.543)" fill="white"/>
      <rect width="57.2488" height="12.667" rx="4" transform="matrix(0.99481 0.101749 -0.102018 0.994783 68.7686 57.9043)" fill="white"/>
      <rect width="31.4584" height="10.3068" rx="4" transform="matrix(0.99481 0.10175 -0.102018 0.994783 61.5596 96.7969)" fill="white"/>
      <rect width="31.4584" height="10.3068" rx="4" transform="matrix(0.99481 0.101749 -0.102018 0.994783 114.524 103.15)" fill="white"/>
      <rect width="31.4584" height="10.3068" rx="4" transform="matrix(0.99481 0.101749 -0.102018 0.994783 166.8 110.109)" fill="white"/>
      <ellipse cx="65.6117" cy="25.5718" rx="25.6058" ry="25.5718" fill="#FFB74A"/>
      <g clip-path="url(#clip0_1_106246)">
      <path d="M49.8838 33.8957V20.628C49.9054 20.587 49.9226 20.5437 49.935 20.499C50.2166 18.8503 51.4958 17.6613 53.156 17.5753C54.1505 17.5237 55.149 17.5487 56.1458 17.5542C56.2335 17.5611 56.3212 17.5421 56.3982 17.4995C56.4753 17.4568 56.5383 17.3924 56.5795 17.3142C57.0449 16.5817 57.5313 15.8617 58.0053 15.1339C58.7361 14.0121 59.778 13.4633 61.0976 13.4578C63.3478 13.449 65.5976 13.449 67.8468 13.4578C69.1656 13.4633 70.2082 14.0105 70.9398 15.1331C71.4138 15.8601 71.8986 16.5801 72.3657 17.3126C72.4063 17.3912 72.469 17.456 72.546 17.4988C72.623 17.5416 72.7109 17.5606 72.7985 17.5534C73.6814 17.5424 74.565 17.5432 75.4478 17.5534C77.2321 17.5682 78.5881 18.6228 78.9706 20.3051C79.0332 20.6042 79.0626 20.9094 79.0582 21.2151C79.0644 25.2525 79.0663 29.2915 79.0637 33.3321C79.0637 33.8848 78.9908 34.4265 78.7534 34.9214C78.0792 36.3183 76.9481 36.993 75.4175 36.9938C68.1253 36.9979 60.833 36.9979 53.5408 36.9938C53.4267 36.9938 53.3127 36.9938 53.1994 36.9852C51.6906 36.889 50.4454 35.904 50.0304 34.4766C49.9761 34.2811 49.9327 34.0873 49.8838 33.8957ZM64.483 18.2851C60.1643 18.2655 56.6252 21.8076 56.609 26.1666C56.6068 27.2075 56.8083 28.2385 57.2019 29.2008C57.5954 30.1632 58.1734 31.0379 58.9027 31.7749C59.632 32.512 60.4983 33.097 61.4521 33.4964C62.4059 33.8959 63.4284 34.102 64.4613 34.1029C65.4922 34.1081 66.5139 33.9084 67.468 33.515C68.422 33.1216 69.2897 32.5424 70.0213 31.8105C70.7528 31.0787 71.3338 30.2085 71.7311 29.2499C72.1283 28.2914 72.3339 27.2633 72.3362 26.2245C72.3571 21.8686 68.8266 18.3046 64.483 18.2851ZM74.437 22.5268C74.7194 22.5088 75.0266 22.5182 75.3221 22.4635C75.7876 22.3752 76.1142 21.9085 76.0832 21.4269C76.0498 20.9188 75.6813 20.4802 75.205 20.4521C74.6942 20.4216 74.1821 20.4216 73.6713 20.4521C73.4225 20.4718 73.19 20.5846 73.0196 20.7683C72.8492 20.9521 72.7532 21.1934 72.7504 21.4449C72.742 21.6861 72.8198 21.9224 72.9698 22.1107C73.1197 22.2989 73.3318 22.4266 73.5673 22.4705C73.8451 22.5174 74.1329 22.5088 74.437 22.5268Z" fill="black"/>
      <path d="M64.4502 30.5861C62.0127 30.5541 60.0601 28.5778 60.0942 26.1771C60.1291 23.749 62.1267 21.7633 64.4982 21.7993C66.9381 21.8384 68.8899 23.8162 68.8542 26.2122C68.8177 28.6474 66.8325 30.6182 64.4502 30.5861Z" fill="black"/>
      </g>
      <rect width="21.935" height="39.0663" rx="10.9675" transform="matrix(0.800138 0.484512 -0.45699 0.830545 241.906 41.1953)" fill="#317DF6"/>
      <rect width="16.8348" height="44.2866" rx="8.41739" transform="matrix(-0.45789 0.829514 -0.800421 -0.483129 263.334 66.4492)" fill="#ED6742"/>
      <rect width="21.1256" height="17.4423" transform="matrix(0.799672 0.486774 -0.455523 0.832222 237.281 50.334)" fill="#081F7B"/>
      <rect width="18.6479" height="37.1345" rx="9.32394" transform="matrix(0.407726 0.859914 -0.818284 0.455163 42.5586 109.383)" fill="#317DF6"/>
      <rect width="18.631" height="37.6614" rx="9.31548" transform="matrix(0.40781 0.859824 -0.818302 0.455032 32.3291 114.631)" fill="#ED6742"/>
      <ellipse cx="9.69151" cy="11.945" rx="9.69151" ry="11.945" transform="matrix(0.412418 0.864848 -0.827103 0.457451 31.9316 114.631)" fill="#081F7B"/>
      <defs>
      <clipPath id="clip0_1_106246">
      <rect width="29.1814" height="23.5383" fill="white" transform="translate(49.8838 13.4512)"/>
      </clipPath>
      </defs>
    </svg>
  )
}