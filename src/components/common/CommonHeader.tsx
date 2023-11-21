import styled from 'styled-components'
import { CommonLogo } from './CommonLogo'
import { useNavigate } from 'react-router-dom'

export const CommonHeader = () => {
  const naviagate = useNavigate()

  const moveToMain = () => {
    naviagate('/')
  }

  return (
    <HeaderContainer>
      <CommonLogo
        width={130}
        height={50}
        onClick={moveToMain}
      />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  padding: 12px;
  margin: 0 auto;
  max-width: calc(100% - 56px);
`
