import { themeState } from '@atom'
import { useRecoilValue } from 'recoil'

export const CommonXBtn = ({
  size,
  isBlack
}: {
  size?: number
  isBlack?: boolean
}) => {
  const isDark = useRecoilValue(themeState)
  const color = isDark ? 'white' : 'black'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6L6 18"
        stroke={isBlack ? 'black' : color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={isBlack ? 'black' : color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
