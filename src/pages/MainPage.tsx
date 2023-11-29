import { useInfiniteQuery } from '@tanstack/react-query'
import { getMainData } from '@API'
import {
  CommonFooter,
  CommonHeader,
  CommonTopButton,
  MainContent,
  MainThumbnail,
  Spinner
} from '@components'
import { isProduction } from '@utils'
import { useLoaderData } from 'react-router-dom'
import { useObserver } from '@hooks'

export const MainPage = () => {
  const { isLoading, data, error, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['youtube-main'],
      queryFn: getMainData,
      initialPageParam: '',
      getNextPageParam: lastPage => {
        if (!lastPage.NextToken) return undefined
        return lastPage.NextToken
      },
      enabled: !!isProduction
    })

  const observerRef = useObserver(hasNextPage, fetchNextPage, isLoading)

  type YoutubeDataType = any

  const preLoadData: YoutubeDataType = isProduction
    ? data?.pages
    : useLoaderData()

  if (isProduction && isLoading) {
    console.error(error?.message)
  }

  return (
    <>
      <CommonHeader />
      <MainThumbnail preLoadData={preLoadData} />
      <MainContent preLoadData={preLoadData} />

      <CommonTopButton />
      {isFetching && <Spinner />}
      <CommonFooter />

      <div
        ref={observerRef}
        style={{ minHeight: '1px' }}></div>
    </>
  )
}
