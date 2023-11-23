import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentCardWrapper,
  ContentCardTitle,
  ContentCardDescription,
  ThumbnailBoxImg,
  VideoIframe,
  VideoOverlay
} from '@styles'
import { VideoItem } from '@types'

export const ContentCard = ({ data }: { data: VideoItem }) => {
  const navigate = useNavigate()
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setHoveredVideoId(id)
  }

  const handleMouseLeave = () => {
    setHoveredVideoId(null)
  }

  const handleClickItem = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <ContentCardWrapper
      onMouseEnter={() => handleMouseEnter(data.id)}
      onMouseLeave={handleMouseLeave}>
      <ThumbnailBoxImg
        $image={data.snippet.thumbnails.standard.url}
        $height={+data.snippet.thumbnails.medium.height}>
        {hoveredVideoId === data.id && (
          <VideoOverlay className="video-overlay">
            <VideoIframe
              src={`https://www.youtube.com/embed/${data.id}?autoplay=${
                hoveredVideoId === data.id ? 1 : 0
              }&mute=1&controls=0`}
              title={data.snippet.title}
            />
          </VideoOverlay>
        )}
      </ThumbnailBoxImg>
      <ContentCardTitle onClick={() => handleClickItem(data.id)}>
        {data.snippet.title}
      </ContentCardTitle>
      <ContentCardDescription onClick={() => handleClickItem(data.id)}>
        {data.snippet.description}
      </ContentCardDescription>
    </ContentCardWrapper>
  )
}
