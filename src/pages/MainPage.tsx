import { SearchContent } from '@components'
import {
  CommonFooter,
  CommonHeader,
  CommonScrollAnchor
} from '@components/common'

import { MainContent, MainThumbnail } from '@components/main'
import { useDebounce } from '@hooks'
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
    const filteredItems = preLoadData?.filter((item: any) =>
      item.snippet.title
        .toLowerCase()
        .replace(' ', '')
        .toLocaleLowerCase()
        .includes(debouncedSearchKeyword.toLowerCase())
    )

    setSearch(filteredItems || [])
  }, [debouncedSearchKeyword])

  return (
    <>
      <CommonHeader
        handleSearch={handleSearch}
        preLoadData={preLoadData}
      />
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
