import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Layout, MainPage, DetailPage, SearchPage } from '@pages'
import { ErrorComponent } from '@components'

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
      try {
        const res = await fetch('/videos/popular.json')
        if (!res.ok) {
          throw new Error('Data Fetching Error')
        }
        const json = await res.json()
        return json.items
      } catch (error) {
        console.error('Error fetching Data:', error)
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
