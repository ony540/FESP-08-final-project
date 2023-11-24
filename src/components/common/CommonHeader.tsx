/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components'
import { CommonLogo } from '../icons/CommonLogo'
import { useNavigate } from 'react-router-dom'
import { CommonSearch } from '../icons/CommonSearch'
import { useEffect, useRef, useState } from 'react'
import { CommonXBtn } from '../icons/CommonXBtn'
import Dark from '@components/Dark'

interface Truthy {
  $isTrue?: boolean
  $isSearch?: boolean
}

export const CommonHeader = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const moveToMain = () => {
    navigate('/')
  }

  const handleClickSearch = () => {
    setIsSearch(!isSearch)
  }

  const onSearchEnter = (e: any) => {
    if (e.key === 'Enter') {
      navigate({
        pathname: '/results',
        search: `?search_query=${searchInput}`
      })
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [isSearch])

  return (
    <>
      <HeaderContainer>
        {/* 메인 아이콘 */}
        <LogoIconWrapper onClick={moveToMain}>
          <CommonLogo
            width={130}
            height={50}
          />
        </LogoIconWrapper>
        {/* 다크모드 버튼 */}
        <Dark />
        {/* 검색 아이콘 */}
        {
          <>
            {isSearch ? (
              <SearchBarWrapper $isSearch={isSearch}>
                <StyledInput
                  onKeyDown={onSearchEnter}
                  maxLength={30}
                  ref={inputRef}
                  $isTrue={isSearch}
                  onChange={e => setSearchInput(e.target.value)}
                />
                <SearchBarXWrapper onClick={handleClickSearch}>
                  <CommonXBtn />
                </SearchBarXWrapper>
              </SearchBarWrapper>
            ) : (
              <>
                <SearchIconWrapper onClick={handleClickSearch}>
                  <CommonSearch darkMode={true} />
                  <CommonSearch darkMode={false} />
                </SearchIconWrapper>
              </>
            )}
          </>
        }
      </HeaderContainer>
    </>
  )
}

// KEYFRAMES
const animating = keyframes`
  from {
    width: 20px;
  }

  to {
    width: 300px;
  }
`

// HEADER CONTAINER
const HeaderContainer = styled.div`
  position: relative;
  padding: 12px;
  margin: 0 auto;
  max-width: calc(100% - 70px);
  display: flex;
  align-items: center;
  position: relative;
`

// HEADER LOGO WRAP
const LogoIconWrapper = styled.div`
  cursor: pointer;
`

// SEARCH BAR CONTAINER
const SearchBarWrapper = styled.div<Truthy>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  display: flex;
  height: 40px;
  width: 330px;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 0;
  animation: ${animating} 0.4s forwards;
`

// X BTN
const SearchBarXWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 1;
`

// GLASSES BTN
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
`

// SEARCH INPUT
const StyledInput = styled.input<Truthy>`
  position: absolute;
  padding: 8px 12px;
  /* outline: none; */
  border: 1px solid;
  border-radius: 8px;
  animation: inherit;
  font-size: ${props => props.theme.customSize.large};
  z-index: 1;

  box-shadow:
    0 3px 6px rgba(255, 255, 255, 0.16),
    0 3px 6px rgba(255, 255, 255, 0.23);
`
