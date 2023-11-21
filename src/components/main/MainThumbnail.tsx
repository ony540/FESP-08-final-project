import styled from 'styled-components'
export const MainThumbnail = () => {
  return (
    <div>
      <ThumbnailBox>MainThumbnail</ThumbnailBox>
    </div>
  )
}

const ThumbnailBox = styled.div`
  width: 100%;
  max-width: calc(100% - 80px);
  height: 240px;
  border: 1px solid;
  margin: 0 auto;
`
