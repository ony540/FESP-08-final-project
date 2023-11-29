const commons = {
  main: {
    BACKGROUND_COLOR: '#0A070B',
    FONT_COLOR_PINK: '#dd2d47',
    FONT_COLOR_WHITE: '#fff',
    FONT_COLOR_RED: '#F41B3B',
    FONT_COLOR_GRAY: '#807E81',
    HR_COLOR_BLACK: '#363536'
  },
  customSize: {
    tiny: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '28px',
    xxxlarge: '48px'
  }
}

const darkColors = {
  body: '#0A070B',
  fontColor: '#fff',
  ButtonColor: '#ffffff80',
  hoverBgColor: '#191919',
  hoverOutlineColor: '#dd2d47'
}
const lightColors = {
  body: '#fff',
  fontColor: '#000',
  ButtonColor: '#dedede99',
  hoverBgColor: '#fff',
  hoverOutlineColor: '#1884f7'
}

export const lightTheme = {
  themMode: lightColors,
  ...commons
}

export const darkTheme = {
  themMode: darkColors,
  ...commons
}

export type Theme = typeof lightTheme | typeof darkTheme
