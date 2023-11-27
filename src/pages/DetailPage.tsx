import { CommentsBox, DetailMainContent, DetailRelatedList } from '@components'
import { CommonFooter, CommonHeader, CommonTopButton } from '@components/common'
import {
  RelatedVideoItem,
  RelatedVideoListResponse,
  VideoItem,
  VideoListResponse
} from '@types'
import { isProduction } from '@utils'
import { getDetailVideo, getRelatedVideos } from '@API'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const DetailPage = () => {
  const param = useParams()
  const id: string = param.id as string
  const preLoadData: any = !isProduction && useLoaderData()

  const { state } = useLocation()
  const [detailData, setDetailData] = useState<VideoItem | null>(null)
  const [relatedData, setRelatedData] = useState<RelatedVideoItem[] | null>(
    null
  )

  const { data: detailDatafromQuery, isLoading: isdetailLoading } = useQuery<
    VideoListResponse,
    Error,
    VideoItem
  >({
    queryKey: ['detailData', id],
    queryFn: () => getDetailVideo(id),
    select: data => data.items[0],
    enabled: !!isProduction
  })

  const { data: relatedDatafromQuery, isLoading: isRelatedLoading } = useQuery<
    RelatedVideoListResponse,
    Error,
    RelatedVideoItem[]
  >({
    queryKey: ['RelatedVideo', id],
    queryFn: () =>
      getRelatedVideos(detailDatafromQuery?.snippet.channelId as string),
    enabled: !!isProduction && !!detailDatafromQuery,
    select: data => data.items
  })

  useEffect(() => {
    const fetchDataDevelop = async () => {
      const filteredData = state
        ? state
        : preLoadData.find((item: VideoItem) => item.id === id)
      setDetailData(filteredData)

      const relatedJson = await fetch(
        `/videos/searchByChannels/search-by-channel-id-${filteredData?.snippet.channelId}.json`
      ).then(res => res.json())
      setRelatedData(relatedJson.items)
    }
    if (!isProduction) fetchDataDevelop()
  }, [id])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (isdetailLoading || isRelatedLoading) return <h3>로딩중</h3>

  return (
    <>
      <CommonHeader />
      <DetailMainContent
        detailData={isProduction ? detailDatafromQuery : detailData}
        id={id}
      />
      <DetailRelatedList
        relatedData={isProduction ? relatedDatafromQuery : relatedData}
      />
      <CommentsBox videoId={id} />
      <CommonFooter />
      <CommonTopButton />
    </>
  )
}
