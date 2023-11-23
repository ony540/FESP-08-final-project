import styled from 'styled-components'

export const CommonScrollAnchor = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledAnchor onClick={moveToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M18.07 9.57L12 3.5 5.93 9.57M12 20.5V3.67"></path>
      </svg>
    </StyledAnchor>
  )
}

const StyledAnchor = styled.button`
  border-radius: 12px;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.main.ft_color_r};
  position: fixed;
  right: 10%;
  bottom: 10%;
  z-index: 888;
  text-align: center;
  font-size: 18px;

  cursor: pointer;
`
