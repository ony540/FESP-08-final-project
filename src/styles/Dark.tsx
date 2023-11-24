import { lightTheme, darkTheme } from './theme/index'
import { useRecoilState } from 'recoil'
import { themeState } from '../styles/theme/themeState'

function Dark() {
  const [theme, setTheme] = useRecoilState(themeState)
  // const [themeLoadable, setTheme] = useRecoilState(persistThemeState)
  // const theme =
  //   themeLoadable.state === 'hasValue' ? themeLoadable.contents : 'light'

  const themeToggler = () => {
    setTheme(prevTheme => (prevTheme.body === 'light' ? darkTheme : lightTheme))
  }

  return <button onClick={themeToggler}>Change</button>
}

export default Dark
