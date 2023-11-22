import {
  ThumbnailBoxDescription,
  ThumbnailBoxImg,
  ThumbnailBoxTitle,
  ThumbnailBoxWrapper,
  ThumbnailWrap,
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
    <ThumbnailWrap>
      {search?.map((i: any, idx: any) => (
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
  )
}

const StyledH2 = styled.h2`
  display: block;
  font-size: 28px;
  margin: 20px auto calc(100vh - 350px);
  max-width: calc(100% - 100px);
`
