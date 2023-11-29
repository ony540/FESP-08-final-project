import { Outlet } from 'react-router-dom'
import { GlobalStyles } from '@styles'
import { Footer, Header, ScrollTopAnchor } from '@components'

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <ScrollTopAnchor />
      <Footer />
    </>
  )
}
