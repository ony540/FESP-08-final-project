import styled from 'styled-components'
import { CommonLogo } from './CommonLogo'
import { CommonSocial } from './CommonSocial'
import { FOOTER_TEXT } from '@constants'

export const CommonFooter = () => {
  return (
    <>
      <StyledHrLine />
      <FooterContainer>
        <CommonLogo
          width={130}
          height={100}
        />
        {/* {renderFooterText()} */}
        <FlexRow>
          <FlexRowText>
            {FOOTER_TEXT.ROW_TEXT.slice(0, 3).map((i: any, idx: any) => (
              <div key={idx}>
                <>{i}</>
              </div>
            ))}
          </FlexRowText>
          <FlexRowText>
            {FOOTER_TEXT.ROW_TEXT.slice(3).map((i: any, idx: any) => (
              <div key={idx}>
                <>{i}</>
              </div>
            ))}
            <CommonSocial width={70} />
          </FlexRowText>
        </FlexRow>

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
