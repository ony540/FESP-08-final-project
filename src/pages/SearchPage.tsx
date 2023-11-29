import { ContentCard, Spinner } from '@components'
import { IsNotSearched, SearchContentCard } from '@components/search'
import { useObserver } from '@hooks'
import { ContentWrap } from '@styles'
import { useInfiniteQuery } from '@tanstack/react-query'
import { RelatedVideoItem, VideoItem } from '@types'
import { isProduction } from '@utils'
import { getSearchedVideo } from '@youtube'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'

export const SearchPage = () => {
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  const preLoadData: any = !isProduction && useLoaderData()
  const [query] = useSearchParams()
  const detailId = query.get('search_query') as string // 주소창에서 가져오는 값
  const [searchItem, setSearchItem] = useState([] || null)
  const [pageToken, setPageToken] = useState<string>('')

  // 자동으로 pathname을 지정해주는 용도
  useEffect(() => {
    if (currentPath === '/results' && !query.get('search_query')) {
      navigate({
        pathname: '/results',
        search: `?search_query=${detailId || ''}`
      })
    }
  }, [currentPath, detailId, query])

  // 개발모드 로직
  useEffect(() => {
    if (!isProduction) {
      const filteredItems = preLoadData?.items.filter((item: any) => {
        const loadedTitle = item.snippet.title.replace(/\s/g, '').toLowerCase()
        const searchQuery = detailId?.replace(/\s/g, '').toLowerCase()
        return loadedTitle.includes(searchQuery)
      })
      setSearchItem(filteredItems)
    }
  }, [detailId, isProduction])

  const renderDevelopContents = () => {
    if (searchItem.length <= 0 || detailId === '') {
      return <IsNotSearched />
    }

    return (
      <>
        <ContentWrap>
          {searchItem &&
            searchItem?.map((i: VideoItem, idx: any) => (
              <li key={idx}>
                <ContentCard data={i} />
              </li>
            ))}
        </ContentWrap>
      </>
    )
  }

  // 배포모드 로직
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['searched-data', detailId],
      queryFn: () =>
        getSearchedVideo({
          searchInput: detailId,
          nextPageToken: pageToken
        }),
      initialPageParam: 0,
      getNextPageParam: lastPage => {
        const token = lastPage.nextPageToken
        return token ? token : undefined
      },
      enabled: !!isProduction
    })

  useEffect(() => {
    if (isProduction) {
      setPageToken(data?.pages[data.pages.length - 1].nextPageToken)
    }
  }, [data])

  const observerRef = useObserver(hasNextPage, fetchNextPage, isLoading)

  if (isLoading)
    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        <Spinner />
      </div>
    )

  if (error) {
    return <p>{error.message}</p>
  }

  const renderContents = () => {
    if (data?.pages[0].length === 0 || detailId === '') return <IsNotSearched />

    return (
      <>
        <ContentWrap>
          {data?.pages?.map((page, i) => (
            <React.Fragment key={i}>
              {page.items.map((i: RelatedVideoItem, idx: any) => (
                <li key={idx}>
                  <SearchContentCard i={i} />
                </li>
              ))}
            </React.Fragment>
          ))}
          <div
            ref={observerRef}
            style={{ minHeight: '1px' }}></div>
        </ContentWrap>
      </>
    )
  }

  return <>{isProduction ? renderContents() : renderDevelopContents()}</>
}
