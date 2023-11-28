import { useInfiniteQuery } from '@tanstack/react-query'
import { getMainData } from '@API'
import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail,
  Spinner
} from '@components'
import { useEffect, useState } from 'react'
import { isProduction } from '@utils'
import { useLoaderData } from 'react-router-dom'
import { useObserver } from '@hooks'

export const MainPage = () => {
  const [pageToken, setPageToken] = useState('')
  const { status, data, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['youtube-main'],
    queryFn: () => getMainData({ nextPageToken: pageToken }),
    initialPageParam: 5,
    getNextPageParam: lastPage => {
      const token = lastPage.nextPageToken
      return token ? token : undefined
    },
    enabled: !!isProduction
  })

  useEffect(() => {
    const lastPageToken = data?.pages[data.pages.length - 1].nextPageToken
    setPageToken(lastPageToken)
  }, [data])

  const observerRef = useObserver(
    hasNextPage,
    fetchNextPage,
    status === 'pending'
  )

  type YoutubeDataType = any

  const preLoadData: YoutubeDataType = isProduction
    ? data?.pages
    : useLoaderData()

  if (isProduction && status === 'error') {
    console.error(error.message)
  }

  return (
    <>
      <CommonHeader />
      <MainThumbnail preLoadData={preLoadData} />
      <MainContent preLoadData={preLoadData} />

      <div
        ref={observerRef}
        style={{ minHeight: '1px' }}></div>
      {status === 'pending' && <Spinner />}
      <CommonFooter />
    </>
  )
}
