import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail
} from '@components'
import { CommonScrollAnchor } from '@components/icons'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  const preLoadData: any = useLoaderData()

  return (
    <>
      <CommonHeader />
      <MainThumbnail preLoadData={preLoadData} />

      <MainContent preLoadData={preLoadData} />

      <CommonFooter />
      <CommonScrollAnchor />
    </>
  )
}
