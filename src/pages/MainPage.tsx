import { CommonFooter, CommonHeader } from '@components/common'
import { MainContent, MainThumbnail } from '@components/main'

export const MainPage = () => {
  return (
    <>
      <CommonHeader />
      <MainThumbnail />
      <MainContent />
      <CommonFooter />
    </>
  )
}
