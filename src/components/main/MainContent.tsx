import { VideoItem } from '@types'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface ThumbnailImg {
  $image?: string
  $height?: number
}

export const MainContent = () => {
  const navigate = useNavigate()
  const [jsonData, setJsonData] = useState<VideoItem[] | null>(null)

  const fetchData = useCallback(async () => {
    const res = await fetch('/videos/popular.json')
    const json = await res.json()
    setJsonData(json.items)
  }, [jsonData])

  useEffect(() => {
    fetchData()
  }, [])

  const handleClickItem = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <ThumbnailWrap>
      {jsonData &&
        jsonData?.map((i, idx) => (
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

const ThumbnailWrap = styled.div`
  margin: 80px auto 0;
  max-width: calc(100% - 100px);
  display: grid;
  row-gap: 10px;
  column-gap: 30px;

  @media (min-width: 300px) {
    grid-template-columns: repeat(1, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }
`

const ThumbnailBoxWrapper = styled.div<ThumbnailImg>`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ThumbnailBoxImg = styled.div<ThumbnailImg>`
  height: ${props => props.$height}px;
  border-radius: 8px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$image})`};

  cursor: pointer;

  /* i-frame option */
  &:hover {
    .video-overlay {
      display: flex;
    }
  }
`

const ThumbnailBoxTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ThumbnailBoxDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${props => props.theme.main.ft_color_g};
`
// i-frame
const VideoOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
`

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`
