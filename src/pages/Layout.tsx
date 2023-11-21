import { Outlet } from 'react-router-dom'
import { GlobalStyles } from '@styles'

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Outlet />
      </div>
    </>
  )
}
