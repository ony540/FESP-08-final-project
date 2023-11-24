import { theme } from '@styles'
import { ArrowButton, CommonButtonProps } from '@types'
import styled from 'styled-components'

export const CommonArrow: React.FC<CommonButtonProps> = ({
  color = '#191919',
  // color = theme.main.ft_color_r,
  rotate
}: CommonButtonProps) => {
  return (
    <StyledSvg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $rotate={rotate}>
      <path
        d="M19 12H5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  )
}

const StyledSvg = styled.svg<ArrowButton>`
  transform: ${p => p.$rotate && `rotate(${p.$rotate}deg) `};
`
