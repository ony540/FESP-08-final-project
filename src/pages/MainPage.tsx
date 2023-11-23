import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail,
  SearchContent
} from '@components'
import Dark from '@components/Dark'
import { useDebounce } from '@hooks'
import { CommonScrollAnchor } from '@icons'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  const preLoadData: any = useLoaderData()
  const [search, setSearch] = useState([])

  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const { debouncedValue: debouncedSearchKeyword, cancel } = useDebounce(
    searchKeyword,
    500
  )

  const handleSearch = (target: string) => {
    setSearchKeyword(target)
    if (searchKeyword === '') {
      cancel()
    }
  }

  useEffect(() => {
    const filteredItems = preLoadData?.filter((item: any) => {
      const formattedTitle = item.snippet.title.replace(/\s/g, '').toLowerCase()
      const formattedSearchKeyword = debouncedSearchKeyword
        .replace(/\s/g, '')
        .toLowerCase()

      return formattedTitle.includes(formattedSearchKeyword)
    })

    setSearch(filteredItems || [])
  }, [debouncedSearchKeyword])

  return (
    <>
      <CommonHeader handleSearch={handleSearch} />
      <Dark />
      {!searchKeyword.length && <MainThumbnail preLoadData={preLoadData} />}

      {searchKeyword.length ? (
        <SearchContent
          search={search}
          debouncedSearchKeyword={debouncedSearchKeyword}
        />
      ) : (
        <MainContent preLoadData={preLoadData} />
      )}

      <CommonFooter />
      <CommonScrollAnchor />
    </>
  )
}
