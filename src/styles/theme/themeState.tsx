import { DefaultValue, atom, selector } from 'recoil'
import { lightTheme, darkTheme } from './index'

const getThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light') {
    return lightTheme
  } else if (storedTheme === 'dark') {
    return darkTheme
  } else {
    return lightTheme
  }
}
export const themeState = atom({
  key: 'themeState',
  default: getThemeFromLocalStorage()
})

export const persistThemeState = selector({
  key: 'themeState/Persist',
  get: ({ get }) => {
    return get(themeState)
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem('theme')
      set(themeState, newValue)
    } else if (typeof newValue === 'object' && 'body' in newValue) {
      localStorage.setItem('theme', newValue.body)
      set(themeState, newValue)
    }
  }
})
