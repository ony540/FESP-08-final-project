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
        return res.data
      } catch (error) {
        console.error('LOADER 에러:', error)
        throw error
      }
    }
  }
}

export const routes = [
  {
    path: '/FESP-08-final-project',
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
