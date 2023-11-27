import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Layout, MainPage, DetailPage, SearchPage } from '@pages'
import { ErrorComponent } from '@components'
import axios from 'axios'
import { isProduction } from '@utils'

const generateRoute = (
  path: string,
  component: React.ReactNode,
  children?: RouteObject[]
): RouteObject => {
  return {
    path: path,
    element: component,
    errorElement: <ErrorComponent />,
    children: children,
    loader: async () => {
      if (isProduction) return null
      try {
        const res: any = await axios('/videos/popular.json')
        return res.data.items
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error)
        throw error
      }
    }
  }
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      generateRoute('/', <MainPage />),
      generateRoute('/detail/:id', <DetailPage />),
      generateRoute('/results', <SearchPage />)
    ],
    errorElement: <ErrorComponent />
  }
]

export const router = createBrowserRouter(routes)
