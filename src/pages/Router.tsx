import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ErrorComponent } from '../components'
import { Layout, MainPage, DetailPage } from '@pages/index'

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
    ErrorComponent: <ErrorComponent />,
    children: [
      generateRoute('/', <MainPage />),
      generateRoute('/detail:id', <DetailPage />)
    ]
  }
]

export const router = createBrowserRouter(routes)
