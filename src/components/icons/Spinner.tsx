export const Spinner = () => {
  const currentTheme = localStorage.getItem('theme')

  const spinnerStyle = {
    margin: 'auto',
    display: 'block',
    background: Number(currentTheme) ? '#0A070B' : '#fff'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={spinnerStyle}
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <defs>
        <clipPath
          id="progress-ozcmtia6k0e-cp"
          x="0"
          y="0"
          width="100"
          height="100">
          <rect
            x="0"
            y="0"
            width="0"
            height="100">
            <animate
              attributeName="width"
              repeatCount="indefinite"
              dur="1s"
              values="0;100;100"
              keyTimes="0;0.5;1"></animate>
            <animate
              attributeName="x"
              repeatCount="indefinite"
              dur="1s"
              values="0;0;100"
              keyTimes="0;0.5;1"></animate>
          </rect>
        </clipPath>
      </defs>
      <path
        fill={Number(currentTheme) ? '#F41B3B' : '#1884f7'}
        clipPath="url(#progress-ozcmtia6k0e-cp)"
        d="M18 40.99L82 40.99A9.009999999999998 9.009999999999998 0 0 1 91.00999999999999 50L91.00999999999999 50A9.009999999999998 9.009999999999998 0 0 1 82 59.01L18 59.01A9.009999999999998 9.009999999999998 0 0 1 8.990000000000004 50L8.990000000000004 50A9.009999999999998 9.009999999999998 0 0 1 18 40.99 Z"></path>
    </svg>
  )
}
