import { ContentWrap, ListTitle } from '@styles'
import { VideoItem } from '@types'
import { ContentCard } from './ContentCard'

export const MainContent = ({ preLoadData }: { preLoadData: VideoItem[] }) => {
  return (
    <>
      <ListTitle>Most Popular</ListTitle>
      <ContentWrap>
        {preLoadData &&
          preLoadData?.map((data: VideoItem) => (
            <li key={data.id}>
              <ContentCard data={data} />
            </li>
          ))}
      </ContentWrap>
    </>
  )
}
