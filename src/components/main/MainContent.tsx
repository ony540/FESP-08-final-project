import { ContentWrap, ListTitle } from '@styles'
import { ContentCard } from './ContentCard'
import { isProduction } from '@utils'

export const MainContent = ({ fetchData }: { fetchData: any }) => {
  const renderContents = () => {
    return isProduction ? (
      <>
        {fetchData?.map((data: any) =>
          data.results.map((item, idx) => (
            <li key={Date() + idx}>
              <ContentCard data={item} />
            </li>
          ))
        )}
      </>
    ) : (
      <>
        {fetchData?.items.map((item, idx) => (
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
