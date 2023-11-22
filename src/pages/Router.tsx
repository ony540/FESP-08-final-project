import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Layout, MainPage, DetailPage } from '@pages/index'
import { ErrorComponent } from '@components'

const generateRoute = (
  path: any,
  component: any,
  children?: any
): RouteObject => {
  return {
    path: path,
    element: component,
    errorElement: <ErrorComponent />,
    children: children
  }
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorComponent: <ErrorComponent />,
    children: [
      generateRoute('/', <MainPage />),
      generateRoute('/detail:id', <DetailPage />)
    ],
    errorElement: <ErrorComponent />
  }
]

export const router = createBrowserRouter(routes)
