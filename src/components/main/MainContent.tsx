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
import { useNavigate } from 'react-router-dom'

export const MainContent = ({
  preLoadData
}: {
  preLoadData: VideoItem[]
  search?: string[]
  searchKeyword?: string
}) => {
  const navigate = useNavigate()

  const handleClickItem = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <ContentTitle>Most Popular</ContentTitle>
      <ThumbnailWrap>
        {preLoadData &&
          preLoadData?.map((i: any, idx: any) => (
            <ThumbnailBoxWrapper key={idx}>
              <ThumbnailBoxImg
                $image={i.snippet.thumbnails.standard.url}
                $height={+i.snippet.thumbnails.medium.height}>
                <VideoOverlay className="video-overlay">
                  <VideoIframe
                    src={`https://www.youtube.com/embed/${i.id}?autoplay=1&mute=1&controls=0`}
                    title={i.snippet.title}
                  />
                </VideoOverlay>
              </ThumbnailBoxImg>
              <ThumbnailBoxTitle onClick={() => handleClickItem(i.id)}>
                {i.snippet.title}
              </ThumbnailBoxTitle>
              <ThumbnailBoxDescription onClick={() => handleClickItem(i.id)}>
                {i.snippet.description}
              </ThumbnailBoxDescription>
            </ThumbnailBoxWrapper>
          ))}
      </ThumbnailWrap>
    </>
  )
}
