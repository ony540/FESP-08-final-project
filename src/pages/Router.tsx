import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ErrorComponent } from '../components'
import { Layout } from './'
import { MainPage } from './MainPage'
import { DetailPage } from './DetailPage'

//페이지 정보를 담고있는 객체를 반환하는 함수.

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
