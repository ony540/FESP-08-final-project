import { ERROR_TEXTS } from '../constants'
import { GlobalStyles } from '@styles'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { CommonFooter, CommonHeader } from '@common'

export const ErrorComponent = () => {
  const navigate = useNavigate()

  return (
    <>
      <GlobalStyles />
      <CommonHeader />
      <ErrorText>
        <ErrorHead>{ERROR_TEXTS.headerText}</ErrorHead>
        <ErrorApology>{ERROR_TEXTS.errorText}</ErrorApology>
        <ErrorApology>{ERROR_TEXTS.apologyText}</ErrorApology>
        <MainMove onClick={() => navigate('/')}>
          {ERROR_TEXTS.returnText}
        </MainMove>
      </ErrorText>
      <CommonFooter />
    </>
  )
}

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
const ErrorHead = styled.div`
  font-size: 80px;
  color: ${props => props.theme.main.ft_color_r};
  margin-bottom: 60px;
`
const ErrorApology = styled.div`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`
const MainMove = styled.button`
  font-size: 20px;
  margin-top: 20px;
  padding: 16px;
  background-color: ${props => props.theme.main.ft_color_r};
  border: 5px solid ${props => props.theme.main.ft_color_r};
  border-radius: 12px;
`
