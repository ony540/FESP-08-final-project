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
    children: children,
    loader: async () => {
      const res = await fetch('/videos/popular.json')
      const json = await res.json()
      return json.items
    }
  }
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      generateRoute('/', <MainPage />),
      generateRoute('/detail/:id', <DetailPage />)
    ],
    errorElement: <ErrorComponent />
  }
]

export const router = createBrowserRouter(routes)
