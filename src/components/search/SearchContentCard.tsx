import {
  ContentCardDescription,
  ContentCardTitle,
  ContentCardWrapper,
  ThumbnailBoxImg,
  VideoIframe,
  VideoOverlay
} from '@styles'
import { RelatedVideoItem } from '@types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchContentCard = ({ i }: { i: RelatedVideoItem }) => {
  const navigate = useNavigate()
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null)

  // 공통로직
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
    <ContentCardWrapper
      onMouseEnter={() => handleMouseEnter(i.id.videoId)}
      onMouseLeave={handleMouseLeave}>
      <ThumbnailBoxImg $image={i.snippet.thumbnails.high.url}>
        {hoveredVideoId === i.id.videoId && (
          <VideoOverlay className="video-overlay">
            <VideoIframe
              src={`https://www.youtube.com/embed/${i.id.videoId}?autoplay=${
                hoveredVideoId === i.id.videoId ? 1 : 0
              }&mute=1&controls=0`}
              title={i.snippet.title}
            />
          </VideoOverlay>
        )}
      </ThumbnailBoxImg>
      <ContentCardTitle onClick={() => moveToDetail(i.id.videoId)}>
        {i.snippet.title}
      </ContentCardTitle>
      <ContentCardDescription onClick={() => moveToDetail(i.id.videoId)}>
        {i.snippet.description}
      </ContentCardDescription>
    </ContentCardWrapper>
  )
}
