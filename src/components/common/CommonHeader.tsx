import styled, { keyframes } from 'styled-components'
import { CommonLogo } from './CommonLogo'
import { useNavigate } from 'react-router-dom'
import { CommonSearch } from './CommonSearch'
import { useEffect, useRef, useState } from 'react'
import { CommonXBtn } from './CommonXBtn'
import { VideoItem } from '@types'

interface Truthy {
  $isTrue: boolean
}

export const CommonHeader = ({ preLoadData }: { preLoadData: VideoItem }) => {
  const [isSearch, setIsSearch] = useState(false)
  const naviagate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const moveToMain = () => {
    naviagate('/')
  }

  const handleClickSearch = () => {
    setIsSearch(!isSearch)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [isSearch])

  return (
    <HeaderContainer>
      {/* 메인 아이콘 */}
      <LogoIconWrapper onClick={moveToMain}>
        <CommonLogo
          width={130}
          height={50}
        />
      </LogoIconWrapper>

      {/* 검색 아이콘 */}

      {isSearch ? (
        <SearchBarWrapper>
          <StyledInput
            ref={inputRef}
            $isTrue={isSearch}
          />
          <SearchBarXWrapper onClick={handleClickSearch}>
            <CommonXBtn />
          </SearchBarXWrapper>
        </SearchBarWrapper>
      ) : (
        <SearchIconWrapper onClick={handleClickSearch}>
          <CommonSearch />
        </SearchIconWrapper>
      )}
    </HeaderContainer>
  )
}

// KEYFRAMES
const animating = keyframes`
from{
  width: 20px
}

to{
    width: 300px
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
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  display: flex;
  height: 40px;
  width: 330px;
  background-color: #fff;
  z-index: 0;
  animation: ${animating} 0.3s forwards;
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
  outline: none;
  border: none;
  border-radius: 8px;
  animation: inherit;
  font-size: ${props => props.theme.customSize.large};
  z-index: 1;

  box-shadow:
    0 3px 6px rgba(255, 255, 255, 0.16),
    0 3px 6px rgba(255, 255, 255, 0.23);
`
