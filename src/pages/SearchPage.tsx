import { CommonHeader } from '@components'
import { IsNotSearched } from '@components/search'
import {
  ContentCardDescription,
  ContentCardTitle,
  ContentCardWrapper,
  ContentWrap,
  ThumbnailBoxImg,
  VideoIframe,
  VideoOverlay
} from '@styles'
import { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'

export const SearchPage = () => {
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  const preLoadData: any = useLoaderData()
  const [query] = useSearchParams()
  const detailId = query.get('search_query') // 주소창에서 가져오는 값
  const [searchItem, setSearchItem] = useState([] || null)
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null)

  const handleMouseEnter = (id: any) => {
    setHoveredVideoId(id)
  }

  const handleMouseLeave = () => {
    setHoveredVideoId(null)
  }

  const moveToDetail = (id: string) => {
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    const filteredItems = preLoadData?.filter((item: any) => {
      const loadedTitle = item.snippet.title.replace(/\s/g, '').toLowerCase()
      const searchQuery = detailId?.replace(/\s/g, '').toLowerCase()
      return loadedTitle.includes(searchQuery)
    })

    setSearchItem(filteredItems)
  }, [detailId])

  useEffect(() => {
    if (currentPath.includes('results')) {
      navigate({
        pathname: '/results',
        search: `?search_query=${detailId || ''}`
      })
    }
  }, [currentPath])

  const renderContents = () => {
    if (searchItem.length <= 0 || detailId === '') {
      return <IsNotSearched />
    }

    return (
      <>
        <ContentWrap>
          {searchItem &&
            searchItem?.map((i: any, idx: any) => (
              <li key={idx}>
                <ContentCardWrapper
                  onMouseEnter={() => handleMouseEnter(i.id)}
                  onMouseLeave={handleMouseLeave}>
                  <ThumbnailBoxImg
                    $image={i.snippet.thumbnails.standard.url}
                    $height={+i.snippet.thumbnails.medium.height}>
                    {hoveredVideoId === i.id && (
                      <VideoOverlay className="video-overlay">
                        <VideoIframe
                          src={`https://www.youtube.com/embed/${
                            i.id
                          }?autoplay=${
                            hoveredVideoId === i.id ? 1 : 0
                          }&mute=1&controls=0`}
                          title={i.snippet.title}
                        />
                      </VideoOverlay>
                    )}
                  </ThumbnailBoxImg>
                  <ContentCardTitle onClick={() => moveToDetail(i.id)}>
                    {i.snippet.title}
                  </ContentCardTitle>
                  <ContentCardDescription onClick={() => moveToDetail(i.id)}>
                    {i.snippet.description}
                  </ContentCardDescription>
                </ContentCardWrapper>
              </li>
            ))}
        </ContentWrap>
      </>
    )
  }

  return (
    <>
      <CommonHeader />
      {renderContents()}
    </>
  )
}
