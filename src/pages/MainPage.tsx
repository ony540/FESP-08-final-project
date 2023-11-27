import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail
} from '@components'
import { CommonTopButton } from '@common'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  const preLoadData: any = useLoaderData()
  console.log(preLoadData)

  return (
    <>
      <CommonHeader />
      <MainThumbnail preLoadData={preLoadData} />

      <MainContent preLoadData={preLoadData} />

      <CommonFooter />
      <CommonTopButton />
    </>
  )
}
