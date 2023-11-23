/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ContentTitle,
  ThumbnailBoxDescription,
  ThumbnailBoxImg,
  ThumbnailBoxTitle,
  ThumbnailBoxWrapper,
  ThumbnailWrap,
  VideoIframe,
  VideoOverlay
} from '@styles'
import { VideoItem } from '@types'
import { useState } from 'react'
// import { handleMouseEnter, handleMouseLeave, moveToDetail } from '@utils'
import { useNavigate } from 'react-router-dom'

export const MainContent = ({
  preLoadData
}: {
  preLoadData: VideoItem[]
  search?: string[]
  searchKeyword?: string
}) => {
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleMouseEnter = (id: any) => {
    setHoveredVideoId(id)
  }

  const handleMouseLeave = () => {
    setHoveredVideoId(null)
  }

  const moveToDetail = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <ContentTitle>Most Popular</ContentTitle>
      <ThumbnailWrap>
        {preLoadData &&
          preLoadData?.map((i: any, idx: any) => (
            <ThumbnailBoxWrapper
              key={idx}
              onMouseEnter={() => handleMouseEnter(i.id)}
              onMouseLeave={handleMouseLeave}>
              <ThumbnailBoxImg
                $image={i.snippet.thumbnails.standard.url}
                $height={+i.snippet.thumbnails.medium.height}>
                {hoveredVideoId === i.id && (
                  <VideoOverlay className="video-overlay">
                    <VideoIframe
                      src={`https://www.youtube.com/embed/${i.id}?autoplay=${
                        hoveredVideoId === i.id ? 1 : 0
                      }&mute=1&controls=0`}
                      title={i.snippet.title}
                    />
                  </VideoOverlay>
                )}
              </ThumbnailBoxImg>
              <ThumbnailBoxTitle onClick={() => moveToDetail(i.id)}>
                {i.snippet.title}
              </ThumbnailBoxTitle>
              <ThumbnailBoxDescription onClick={() => moveToDetail(i.id)}>
                {i.snippet.description}
              </ThumbnailBoxDescription>
            </ThumbnailBoxWrapper>
          ))}
      </ThumbnailWrap>
    </>
  )
}
