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
          {FOOTER_TEXT.map((i: any, idx: any) => (
            <>
              <div key={idx}>{i}</div> |
            </>
          ))}
          <CommonSocial width={70} />
        </FlexRow>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
`

const StyledHrLine = styled.hr`
  margin: 20px auto;
  border: 0;
  height: 2px;
  background: ${props => props.theme.main.hr_color_b};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`
