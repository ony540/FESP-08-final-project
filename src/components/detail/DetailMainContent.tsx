import { CommonShare, CommonWatchList } from '@components/common'
import { VideoItem } from '@types'
import { formatTime } from '@utils'
import styled from 'styled-components'

interface DetailMainContentProps {
  detailData: VideoItem | null
  id: string
}

export const DetailMainContent = ({
  detailData,
  id
}: DetailMainContentProps) => {
  return (
    <div>
      <VideoBox>
        <iframe
          src={`https://www.youtube.com/embed/${id}?si=9My22DHI1t8qtW0-`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </VideoBox>
      <TextWrap>
        <InfoBox>
          <TextBox>
            <h2>{detailData?.snippet.title}</h2>
            <h3>{detailData?.snippet.channelTitle}</h3>
            <time>{formatTime(detailData?.snippet.publishedAt as string)}</time>
          </TextBox>
          <ButtonList>
            <li>
              <button type="button">
                <CommonWatchList width={18} />
                <span>watchlist</span>
              </button>
            </li>
            <li>
              <button type="button">
                <CommonShare width={18} />
                <span>share</span>
              </button>
            </li>
          </ButtonList>
        </InfoBox>

        <DescriptionBox>
          <h3>Description</h3>
          <p>{detailData?.snippet.description}</p>
        </DescriptionBox>
      </TextWrap>
    </div>
  )
}

const VideoBox = styled.div`
  iframe {
    display: block;
    margin: 0 auto 40px;
    width: 1322px;
    width: calc(100% - 100px);
    aspect-ratio: 16/9;
  }
`

const TextWrap = styled.div`
  max-width: calc(100% - 100px);
  margin: 0 auto;
`
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 32px;
  }
`

const TextBox = styled.div`
  line-height: 1.4;

  h2 {
    font-size: ${p => p.theme.customSize.xxlarge};
    font-weight: 700;
    margin-bottom: 24px;
  }

  h3 {
    font-size: ${p => p.theme.customSize.xlarge};
  }
  time {
    color: ${p => p.theme.main.ft_color_g};
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 8px;
  }
`
const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;

  li button {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 86px;
    height: 68px;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.main.ft_color_g};
    font-size: ${p => p.theme.customSize.medium};
    padding-top: 8px;
  }
`

const DescriptionBox = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  p {
    font-size: ${p => p.theme.customSize.medium};
    line-height: 1.6;
    margin-bottom: 80px;
  }
`
