import { ERROR_TEXTS } from '../constants'
import { GlobalStyles } from '@styles'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const ErrorComponent = () => {
  const navigate = useNavigate()

  return (
    <>
      <GlobalStyles />
      <Wrap>
        <ErrorText>
          <ErrorHead>{ERROR_TEXTS.headerText}</ErrorHead>
          <ErrorApology>{ERROR_TEXTS.errorText}</ErrorApology>
          <ErrorApology>{ERROR_TEXTS.apologyText}</ErrorApology>
          <MainMove onClick={() => navigate('/')}>
            {ERROR_TEXTS.returnText}
          </MainMove>
        </ErrorText>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 40px);
`
const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
const ErrorHead = styled.div`
  font-size: ${props => props.theme.customSize.xxxlarge};
  color: ${props => props.theme.themMode.hoverOutlineColor};
  margin-bottom: 60px;
`
const ErrorApology = styled.div`
  font-size: ${props => props.theme.customSize.xxlarge};
  margin: 0 auto 20px;
`
const MainMove = styled.button`
  font-size: 20px;
  margin-top: 20px;
  padding: 16px;
  color: #fff;
  background-color: ${props => props.theme.themMode.hoverOutlineColor};
  border: 5px solid ${props => props.theme.themMode.hoverOutlineColor};
  border-radius: 12px;
`
