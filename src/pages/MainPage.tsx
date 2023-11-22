import {
  CommonFooter,
  CommonHeader,
  CommonScrollAnchor
} from '@components/common'

import { MainContent, MainThumbnail } from '@components/main'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  const preLoadData: any = useLoaderData()

  return (
    <>
      <CommonHeader preLoadData={preLoadData} />
      <MainThumbnail preLoadData={preLoadData} />
      <MainContent preLoadData={preLoadData} />
      <CommonFooter />
      <CommonScrollAnchor />
    </>
  )
}
