import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { RouterProvider } from 'react-router-dom'
import { router } from '@pages'
import { useRecoilValue } from 'recoil'
import { ThemeFlag, themeState } from '@atom'
import { darkTheme, lightTheme } from '@styles'

export default function App() {
  const currentTheme = useRecoilValue<ThemeFlag>(themeState)
  const theme = currentTheme === ThemeFlag.DARK ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
