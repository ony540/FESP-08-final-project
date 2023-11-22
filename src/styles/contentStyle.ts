import styled from 'styled-components'
import { ThumbnailImg } from '@types'

export const ContentTitle = styled.h1`
  margin: 40px auto 0;
  max-width: calc(100% - 100px);
  font-size: 38px;
`

export const ThumbnailWrap = styled.div`
  margin: 20px auto 0;
  max-width: calc(100% - 100px);
  display: grid;
  row-gap: 26px;
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

export const ThumbnailBoxWrapper = styled.div<ThumbnailImg>`
  display: flex;
  flex-direction: column;
`

export const ThumbnailBoxImg = styled.div<ThumbnailImg>`
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
    transform: scale(1.06);
    border-radius: 8px;

    .video-overlay {
      display: flex;
    }
  }
`

export const ThumbnailBoxTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
  line-height: 1.4;
`

export const ThumbnailBoxDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${props => props.theme.main.ft_color_g};
  cursor: pointer;
  line-height: 1.4;
`
// i-frame
export const VideoOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: calc(8px * 1.08);
`

export const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: calc(8px * 1.08);
`
