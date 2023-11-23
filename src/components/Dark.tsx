import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/global'

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
  border: 1px solid red;
  width: 80px;
  padding: 10px;
  text-align: center;
  background-color: red;
  transition: background-color 0.3s;
`

function Dark() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const themeToggler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change</button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Dark
