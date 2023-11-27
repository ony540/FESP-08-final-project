import styled from 'styled-components'
import { ThumbnailImg } from '@types'

export const ListTitle = styled.h1`
  margin: 40px auto 0;
  max-width: calc(100% - 100px);

  font-size: 32px;
  font-weight: 600;
  margin: 80px auto 40px;
  max-width: calc(100% - 100px);

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`

export const ContentWrap = styled.ul`
  margin: 20px auto 0;
  max-width: calc(100% - 100px);
  display: grid;
  row-gap: 16px;
  column-gap: 30px;
  position: relative;

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

  & li:nth-last-child(1):hover::after {
    content: '';
    display: block;
    height: 250px;
  }
`

// ContentCard
export const ContentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  transform-origin: 50% 80%;
  border-radius: 8px;

  @media (min-width: 900px) {
    transform-origin: calc(50% - 20px) 80%;
  }

  &:hover {
    transform: scale(1.2);
    background-color: ${p => p.theme.themMode.hoverBgColor};
    box-shadow: 0 0 3.5px 3.5px ${p => p.theme.themMode.hoverOutlineColor};

    outline: 2px solid ${p => p.theme.themMode.hoverOutlineColor};
    position: absolute;
    min-width: 169px;

    @media (min-width: 300px) {
      width: calc(100% - 15px);
      position: unset;
      margin: 30px auto;
    }
    @media (min-width: 600px) {
      width: calc(50% - 15px);
      position: absolute;
      margin: unset;
    }
    @media (min-width: 900px) {
      width: calc(33% - 30px);
      margin-left: 4px;
    }
    @media (min-width: 1200px) {
      width: calc(25% - 45px);
      margin-left: 8px;
    }

    & > h3 {
      padding: 0 8px;
      color: ${p => p.theme.themMode.fontColor};
    }

    & > p {
      -webkit-line-clamp: 3;
      padding: 0 8px;
    }
  }
`

export const ThumbnailBoxImg = styled.div<ThumbnailImg>`
  height: ${props => props.$height}px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$image})`};

  cursor: pointer;
`

export const ContentCardTitle = styled.h3`
  cursor: pointer;
  line-height: 1.4;
  font-size: ${p => p.theme.customSize.xlarge};
  margin: 8px 0 4px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  &:hover {
    color: white;
  }
`

export const ContentCardDescription = styled.p`
  color: ${props => props.theme.main.ft_color_g};
  cursor: pointer;
  line-height: 1.4;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`
// i-frame
export const VideoOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

export const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`
