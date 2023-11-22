import useSwipe from '@hooks/useSwipe'
import { RelatedVideoItem } from '@types'
import { formatTime } from '@utils'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

interface DetailRelatedListProps {
  relatedData: RelatedVideoItem[] | null
}

interface ThumbnailImg {
  $image?: string
}

export const DetailRelatedList = ({ relatedData }: DetailRelatedListProps) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    isDrag,
    scrollRef,
    onDragStart: handleDragStart,
    onDragMove: handleDragMove,
    onDragEnd: handleDragEnd
  } = useSwipe()

  const handleClickItem = (item: RelatedVideoItem) => {
    navigate(`/detail/${item.id.videoId}`, { state: item })
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }, [id])

  return (
    <RelatedWrap>
      <h2>Related Videos</h2>
      <RelatedVideoList
        ref={scrollRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}>
        {relatedData?.map(item => (
          <li
            key={item.etag}
            onClick={() => {
              if (!isDrag) {
                handleClickItem(item)
              }
            }}>
            <ThumbnailBoxImg $image={item.snippet.thumbnails.high.url}>
              <ThumbnailBoxText>
                <h4>{item.snippet.title}</h4>
                <p>
                  {item.snippet.channelTitle} •
                  <time> {formatTime(item.snippet.publishedAt as string)}</time>
                </p>
              </ThumbnailBoxText>
            </ThumbnailBoxImg>
          </li>
        ))}
      </RelatedVideoList>
    </RelatedWrap>
  )
}

const RelatedWrap = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 40px;

    @media screen and (max-width: 600px) {
      margin-bottom: 12px;
    }
  }
  margin: 80px auto 0;
  max-width: calc(100% - 100px);
`

const RelatedVideoList = styled.ul`
  display: flex;
  gap: 24px;
  overflow-x: scroll;
`

const ThumbnailBoxImg = styled.div<ThumbnailImg>`
  width: 40vw;
  max-width: 400px;
  border-radius: 8px;
  aspect-ratio: 43 / 24;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$image})`};
  padding: 16px 14px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`

const ThumbnailBoxText = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;

    width: calc(40vw - 28px);
    max-width: 372px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  p {
    font-size: ${p => p.theme.customSize.small};
  }
`
