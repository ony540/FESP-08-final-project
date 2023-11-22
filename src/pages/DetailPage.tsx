import { DetailMainContent, DetailRelatedList } from '@components'
import { CommonFooter, CommonHeader } from '@components/common'
import { RelatedVideoItem, VideoItem } from '@types'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'

export const DetailPage = () => {
  const param = useParams()
  const id: string = param.id as string
  const preLoadData: any = useLoaderData()

  const { state } = useLocation()
  const [detailData, setDetailData] = useState<VideoItem | null>(null)
  const [relatedData, setRelatedData] = useState<RelatedVideoItem[] | null>(
    null
  )

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = state
        ? state
        : preLoadData.find((item: VideoItem) => item.id === id)

      setDetailData(filteredData)

      const relatedJson = await fetch(
        `/videos/searchByChannels/search-by-channel-id-${filteredData?.snippet.channelId}.json`
      ).then(res => res.json())
      setRelatedData(relatedJson.items)
    }
    fetchData()
  }, [id])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  return (
    <>
      <CommonHeader />
      <DetailMainContent
        detailData={detailData}
        id={id}
      />
      <DetailRelatedList relatedData={relatedData} />
      <CommonFooter />
    </>
  )
}
