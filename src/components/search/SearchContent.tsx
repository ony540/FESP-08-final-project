import {
  ContentCardDescription,
  ContentCardTitle,
  ContentCardWrapper,
  ContentWrap,
  ThumbnailBoxImg,
  VideoIframe,
  VideoOverlay
} from '@styles'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const SearchContent = ({
  search,
  debouncedSearchKeyword
}: {
  search: string[]
  debouncedSearchKeyword: string
}) => {
  const navigate = useNavigate()

  const handleClickItem = (id: string) => {
    navigate(`/detail/${id}`)
  }

  if (debouncedSearchKeyword && !search.length)
    return <StyledH2>검색된 결과가 없습니다</StyledH2>

  return (
    <ContentWrap>
      {search?.map((i: any, idx: any) => (
        <ContentCardWrapper key={idx}>
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
          <ContentCardTitle onClick={() => handleClickItem(i.id)}>
            {i.snippet.title}
          </ContentCardTitle>
          <ContentCardDescription onClick={() => handleClickItem(i.id)}>
            {i.snippet.description}
          </ContentCardDescription>
        </ContentCardWrapper>
      ))}
    </ContentWrap>
  )
}

const StyledH2 = styled.h2`
  display: block;
  font-size: 28px;
  margin: 20px auto calc(100vh - 350px);
  max-width: calc(100% - 100px);
`
