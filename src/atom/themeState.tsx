import { atom } from 'recoil'

export enum ThemeFlag {
  LIGHT = 0,
  DARK = 1
}
const { LIGHT, DARK } = ThemeFlag

const getThemeFromLocalStorage = (): ThemeFlag => {
  const storedTheme = Number(localStorage.getItem('theme'))
  return storedTheme === LIGHT ? LIGHT : DARK
}

export const themeState = atom<ThemeFlag>({
  key: 'themeState',
  default: getThemeFromLocalStorage()
})
