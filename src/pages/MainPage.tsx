import { useInfiniteQuery } from '@tanstack/react-query'
import { getMainData } from '@API'
import { MainContent, MainBanner, Spinner } from '@components'
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

  const fetchData: YoutubeDataType = isProduction
    ? data?.pages
    : useLoaderData()

  if (isProduction && error) {
    console.error(error?.message)
  }

  return (
    <>
      <MainBanner fetchData={fetchData} />
      <MainContent fetchData={fetchData} />
      {isFetching && <Spinner />}
      <div
        className="observer"
        ref={observerRef}
        style={{ minHeight: '1px' }}
      />
    </>
  )
}
