import { ContentWrap, ListTitle } from '@styles'
import { ContentCard } from './ContentCard'
import { isProduction } from '@utils'

export const MainContent = ({ preLoadData }: { preLoadData: any }) => {
  const renderContents = () => {
    return isProduction ? (
      <>
        {preLoadData?.map((data: any) =>
          data.items.map((item, idx) => (
            <li key={Date() + idx}>
              <ContentCard data={item} />
            </li>
          ))
        )}
      </>
    ) : (
      <>
        {preLoadData?.items.map((item, idx) => (
          <li key={Date() + idx}>
            <ContentCard data={item} />
          </li>
        ))}
      </>
    )
  }
  return (
    <>
      <ListTitle>Most Popular</ListTitle>
      <ContentWrap>{renderContents()}</ContentWrap>
    </>
  )
}
