import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@atom'
import { useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { MoonIcon, SunIcon } from '@icons'

type themeStyleProps = {
  $theme: ThemeFlag
}
export const DarkModeButton = () => {
  const [theme, setTheme] = useRecoilState<ThemeFlag>(themeState)
  const { LIGHT, DARK } = ThemeFlag

  const handleChangeTheme = useCallback((): void => {
    if (theme === DARK) {
      localStorage.setItem('theme', LIGHT as unknown as string)
      setTheme(LIGHT)
    } else {
      localStorage.setItem('theme', DARK as unknown as string)
      setTheme(DARK)
    }
  }, [DARK, LIGHT, setTheme, theme])

  return (
    <DarkModeButtonWrapper>
      <input
        onChange={handleChangeTheme}
        id="darkmodeToggle"
        type="checkbox"
        className="a11y-hidden"
      />
      <label htmlFor="darkmodeToggle">
        <ToggleSlider $theme={theme}>
          <MoonIcon /> <SunIcon />
        </ToggleSlider>
      </label>
    </DarkModeButtonWrapper>
  )
}

const DarkModeButtonWrapper = styled.div`
  width: 60px;
  height: 32px;
  position: relative;
`

const animating = keyframes`
  0%{
    opacity: 1;
  }
  10%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`
const ToggleSlider = styled.span<themeStyleProps>`
  display: block;
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 24px;
  border: 1.6px solid ${props => props.theme.themMode.fontColor};

  svg {
    position: absolute;
    display: inline-block;
    transition: 0.3s;
    top: 2.5px;
    left: ${p => (p.$theme ? '2px' : '28px')};
  }
  svg:nth-last-child(1) {
    animation: ${p => p.$theme && animating} 0.4s forwards;
  }
`
