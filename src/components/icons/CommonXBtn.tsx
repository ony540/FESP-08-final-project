export const CommonXBtn = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <svg
      width={isWhite ? '24' : '28'}
      height={isWhite ? '24' : '28'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6L6 18"
        stroke={isWhite ? 'white' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={isWhite ? 'white' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
