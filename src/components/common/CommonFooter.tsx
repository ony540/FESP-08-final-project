import styled from 'styled-components'
import { FOOTER_TEXT } from '@constants'
import { CommonSocial } from './CommonSocial'
import { CommonLogo } from './CommonLogo'

export const CommonFooter = () => {
  const renderRowText = () => {
    return (
      <FlexRow>
        {[FOOTER_TEXT.ROW_TEXT.slice(0, 3), FOOTER_TEXT.ROW_TEXT.slice(3)].map(
          (row, rowIndex) => (
            <FlexRowText key={rowIndex}>
              {row.map((text, idx) => (
                <div key={idx}>
                  <>{text}</>
                </div>
              ))}
              {rowIndex === 1 && <CommonSocial width={70} />}
            </FlexRowText>
          )
        )}
      </FlexRow>
    )
  }

  return (
    <>
      <StyledHrLine />
      <FooterContainer>
        <CommonLogo
          width={130}
          height={100}
        />
        {renderRowText()}
        <YearText> {FOOTER_TEXT.COLUMN_TEXT}</YearText>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHrLine = styled.hr`
  margin: calc(100% - 90%) auto 0;
  border: 0;
  height: 1px;
  background: ${props => props.theme.main.hr_color_b};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: calc(100% - 100px);
  gap: 300px;
  margin-bottom: 20px;
  font-size: 18px;

  @media (max-width: 300px) {
    gap: 30px;
    font-size: 8px;
  }
  @media (max-width: 450px) {
    gap: 50px;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    gap: 100px;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    gap: 200px;
  }

  @media (min-width: 901px) {
    gap: 300px;
  }
`

const FlexRowText = styled.div`
  display: flex;
  gap: 50px;
`

const YearText = styled.div`
  margin: 30px 0 20px;
`
