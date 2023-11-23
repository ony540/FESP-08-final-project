export interface CommonButtonProps {
  width?: number | string
  height?: number | string
  rotate?: number
  color?: string
  onClick?: () => void
}

export interface ArrowButton {
  $rotate?: number
}
