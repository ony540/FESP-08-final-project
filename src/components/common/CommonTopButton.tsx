import styled from 'styled-components'
import { CommonArrow } from '../icons/CommonArrow'

export const CommonTopButton = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledTopBuuton onClick={moveToTop}>
      <CommonArrow
        rotate={90}
        color="#fff"
      />
    </StyledTopBuuton>
  )
}

const StyledTopBuuton = styled.button`
  border-radius: 12px;
  width: 50px;
  height: 50px;
  background-color: ${p => p.theme.themMode.hoverOutlineColor};
  position: fixed;
  right: 50px;
  bottom: 6%;
  z-index: 888;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`
