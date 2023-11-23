import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail
} from '@components'
import Dark from '@components/Dark'
import { useDebounce } from '@hooks'
import { CommonTopButton } from '@common'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  const preLoadData: any = useLoaderData()

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
