import styled, { keyframes } from 'styled-components'
import { CommonLogo } from '@icons'
import { useNavigate } from 'react-router-dom'
import { CommonSearch } from '@icons'
import { useEffect, useRef, useState } from 'react'
import { CommonXBtn } from '@icons'
import { DarkModeButton } from '@common'

interface Truthy {
  $isSearch?: boolean
}

export const Header = () => {
  const [isSearchToggle, setIsSearchToggle] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  // 최종본 이후 최근 검색어 로직 추가
  const [pastSearchQueries, setPastSearchQueries] = useState<string[]>([])
  const [isDropdownToggle, setIsDropdownToggle] = useState<boolean>(false)
  const storedQueries = localStorage.getItem('searchQueries')
  const headerRef = useRef<HTMLDivElement>(null)

  const handleNavigateToMain = () => {
    navigate('/')
  }

  const handleNavigateToResults = (query: string) => {
    navigate({
      pathname: '/results',
      search: `?search_query=${query}`
    })
    setSearchInput('')
    setIsDropdownToggle(false)
  }

  const handleClickSearch = () => {
    setIsSearchToggle(!isSearchToggle)
    storedQueries ? setIsDropdownToggle(true) : setIsDropdownToggle(false)
  }

  const onSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!searchInput) return
      // 이동 로직
      handleNavigateToResults(searchInput)

      // 저장 로직
      const newQuery = searchInput
      const storedQueries = localStorage.getItem('searchQueries') as string
      const queries = JSON.parse(storedQueries) || []
      const updatedQueries = [...queries, newQuery].sort((a, b) => b - a)
      localStorage.setItem('searchQueries', JSON.stringify(updatedQueries))
      setPastSearchQueries(updatedQueries)
      setIsSearchToggle(false)
    }
  }

  // get item from localstorage
  useEffect(() => {
    inputRef.current?.focus()
    if (isSearchToggle && storedQueries) {
      const decodedQueries = JSON.parse(storedQueries).map((query: string) =>
        decodeURIComponent(query)
      )
      setPastSearchQueries(decodedQueries)
    }
  }, [isSearchToggle])

  // delete-none
  const handleDeleteSearchQuery = (index: number) => {
    const updatedQueries = [...pastSearchQueries]
    updatedQueries.splice(index, 1)
    localStorage.setItem('searchQueries', JSON.stringify(updatedQueries))
    setPastSearchQueries(updatedQueries)
  }

  // delete-all
  const handleDeleteSearchQueryAll = () => {
    localStorage.removeItem('searchQueries')
    setPastSearchQueries([])
  }

  useEffect(() => {
    /** mouse event 뷰포트 클릭시 서치 바 닫는 용도 */
    const handleClickOutside = event => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsSearchToggle(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [headerRef])

  console.log(searchInput)

  return (
    <HeaderContainer
      $isSearch={isSearchToggle}
      ref={headerRef}>
      {/* 메인 아이콘 */}
      <LogoIconWrapper
        onClick={handleNavigateToMain}
        $isSearch={isSearchToggle}>
        <CommonLogo
          width={130}
          height={50}
        />
      </LogoIconWrapper>

      {
        <>
          {isSearchToggle ? (
            <SearchBarWrapper>
              <StyledInput
                onClick={() => setIsDropdownToggle(!isDropdownToggle)}
                onKeyDown={onSearchEnter}
                maxLength={30}
                ref={inputRef}
                onChange={e =>
                  setSearchInput(encodeURIComponent(e.target.value))
                }
              />
              {isDropdownToggle && (
                <DropdownContainer>
                  {pastSearchQueries.length > 0 && (
                    <NoticeContainer>
                      <span>최근 검색어</span>
                      <DeleteAllButton onClick={handleDeleteSearchQueryAll}>
                        전체삭제
                      </DeleteAllButton>
                    </NoticeContainer>
                  )}
                  {pastSearchQueries.map((query, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => {
                        setSearchInput(query)
                      }}>
                      <div
                        className="navigate-div"
                        onClick={() => handleNavigateToResults(query)}>
                        {query}
                      </div>
                      <DeleteNone
                        onClick={() => handleDeleteSearchQuery(index)}>
                        <CommonXBtn
                          size={18}
                          isBlack={true}
                        />
                      </DeleteNone>
                    </DropdownItem>
                  ))}
                </DropdownContainer>
              )}
              <SearchBarXWrapper onClick={handleClickSearch}>
                <CommonXBtn
                  size={28}
                  isBlack={true}
                />
              </SearchBarXWrapper>
            </SearchBarWrapper>
          ) : (
            <SearchIconWrapper onClick={handleClickSearch}>
              <CommonSearch />
            </SearchIconWrapper>
          )}
        </>
      }

      {/* 다크모드 버튼 */}
      <DarkModeButton />
    </HeaderContainer>
  )
}

// KEYFRAMES
const animating = keyframes`
  from {
    width: 20px;
  }

  to {
    width:300px
  }
`
const animatingMoreBig = keyframes`
  from {
    width: 20px;
  }

  to {
    width: calc(100% - 100px);
  }
`

// HEADER CONTAINER
const HeaderContainer = styled.div<Truthy>`
  position: relative;
  padding: 12px;
  margin: 0 auto;
  max-width: calc(100% - 70px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 585px) {
    height: 76.5px;
    flex-direction: ${p => p.$isSearch && 'row-reverse'};
  }
`

// HEADER LOGO WRAP
const LogoIconWrapper = styled.div<Truthy>`
  cursor: pointer;

  @media screen and (max-width: 585px) {
    display: ${p => p.$isSearch && 'none'};
  }
`

// SEARCH BAR CONTAINER
const SearchBarWrapper = styled.div<Truthy>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 80px;
  height: 30px;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 0;
  animation: ${animating} 0.4s forwards;

  @media screen and (max-width: 585px) {
    animation: ${animatingMoreBig} 0.4s forwards;
  }
`

// X BTN
const SearchBarXWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 8px;
  z-index: 1;
`

// GLASSES BTN
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 86px;
  transition: none;
`

// SEARCH INPUT
const StyledInput = styled.input<Truthy>`
  position: absolute;
  width: 100%;
  padding: 6px 12px;
  outline: none;
  border: 1.6px solid ${props => props.theme.themMode.fontColor};
  border-radius: 20px;
  font-size: ${props => props.theme.customSize.large};
  z-index: 1;

  box-shadow:
    0 3px 6px rgba(255, 255, 255, 0.16),
    0 3px 6px rgba(255, 255, 255, 0.23);
`

// 추가

const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 36px;
  right: 0;
  width: 100%;
  overflow-y: auto;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
`

// DROPDOWN ITEM
const DropdownItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-around;
  align-items: center;
  font-size: ${p => p.theme.customSize.medium};

  &:hover {
    background-color: #eee;
  }

  .navigate-div {
    width: calc(100% - 80px);
    padding: 12px;
    margin-right: 30px;
  }
`

const DeleteNone = styled.div`
  cursor: pointer;

  &:hover {
    scale: calc(1.1);
  }
`

const NoticeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    margin-left: 12px;
    font-size: ${p => p.theme.customSize.small};
    color: ${p => p.theme.main.FONT_COLOR_GRAY};
  }
`

const DeleteAllButton = styled.div`
  font-size: ${p => p.theme.customSize.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 32px;
  color: ${p => p.theme.main.HR_COLOR_BLACK};

  &:hover {
    cursor: pointer;
    color: ${p => p.theme.main.FONT_COLOR_PINK};
  }
`
