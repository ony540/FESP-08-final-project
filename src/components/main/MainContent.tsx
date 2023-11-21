import { VideoListResponse } from '@types'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { idText } from 'typescript'

export const MainContent = () => {
  const [jsonData, setJsonData] = useState<VideoListResponse[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/videos/popular.json')
      const json = await res.json()
      setJsonData(json.items)
    }

    fetchData()
  }, [])

  return (
    <div>
      <ContentWrap>
        {jsonData &&
          jsonData?.map(i => <ContentBox key={i.etag}>{i.etag}</ContentBox>)}
      </ContentWrap>
    </div>
  )
}

const ContentWrap = styled.div`
  width: 100%;
  border: 1px solid green;
  margin: 80px auto 0;
  max-width: calc(100% - 100px);
  display: grid;
  grid-template-columns: repeat(4, minmax(169px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-row-gap: 50px;

  @media (min-width: 200px) {
    grid-template-columns: repeat(1, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 430px) {
    grid-template-columns: repeat(2, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(169px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
  }
`

const ContentBox = styled.div`
  width: 169.041px;
  height: 41.353px;
  border: 1px solid red;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: inherit;
`
