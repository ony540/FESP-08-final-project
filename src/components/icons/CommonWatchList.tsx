/* eslint-disable react/prop-types */
import { CommonLogoProps } from '@types'
export const CommonWatchList: React.FC<CommonLogoProps> = ({
  width,
  height
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          y="3.02734"
          width="12.969"
          height="1.5"
          rx="0.75"
          fill="#807E81"
        />
        <rect
          y="7.35156"
          width="12.969"
          height="1.5"
          rx="0.75"
          fill="#807E81"
        />
        <rect
          y="11.6719"
          width="8.646"
          height="1.5"
          rx="0.75"
          fill="#807E81"
        />
        <rect
          x="10.594"
          y="12.3587"
          width="7.78147"
          height="1.5"
          rx="0.75"
          fill="#807E81"
        />
        <rect
          x="15.262"
          y="9.24542"
          width="7.78147"
          height="1.5"
          rx="0.75"
          transform="rotate(90 15.262 9.24542)"
          fill="#807E81"
        />
      </svg>
    </div>
  )
}
