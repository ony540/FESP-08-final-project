import { IS_NOT_SEARCH_RESULTS } from '@constants'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const IsNotSearched = () => {
  const navigate = useNavigate()
  return (
    <Wrap>
      <ErrorText>
        <ErrorHead>{IS_NOT_SEARCH_RESULTS[0]}</ErrorHead>
        <ErrorApology>{IS_NOT_SEARCH_RESULTS[1]}</ErrorApology>
        <MainMove onClick={() => navigate('/')}>메인 페이지로 이동</MainMove>
      </ErrorText>
    </Wrap>
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
`
const ErrorApology = styled.div`
  font-size: ${props => props.theme.customSize.xxlarge};
  margin: 20px auto 40px;
`

const MainMove = styled.button`
  font-size: ${props => props.theme.customSize.xlarge};
  padding: 16px;
  background-color: ${props => props.theme.themMode.hoverOutlineColor};
  border: 5px solid ${props => props.theme.themMode.hoverOutlineColor};
  color: #fff;
  border-radius: 8px;
`
