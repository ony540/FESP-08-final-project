import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/global'

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 16px;
  width: 80px;
  padding: 10px;
  text-align: center;
  transition: background-color 0.3s;
  margin-left: 36px;
`

function Dark() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const themeToggler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change</button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Dark
