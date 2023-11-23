import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/global'

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.body};
  transition:
    background-color 0.3s,
    color 0.3s;
`

function Dark() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={themeToggler}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Dark
