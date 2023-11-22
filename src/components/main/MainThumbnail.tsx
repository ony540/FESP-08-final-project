/* eslint-disable react/prop-types */
import { VideoItem } from '@types'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Slide {
  $image?: string
  $height?: number
}

export const MainThumbnail = () => {
  const [jsonData, setJsonData] = useState<VideoItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/videos/popular.json')
      const json = await res.json()
      const items = json.items
      const randomItems = getRandomItems(items, 5)
      setJsonData(randomItems)
    }

    fetchData()
  }, [])

  const getRandomItems = (array: any[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const CustomPrev: React.FC<
    React.HTMLAttributes<HTMLButtonElement>
  > = props => <Prev onClick={props.onClick}>{'<'} </Prev>

  const CustomNext: React.FC<
    React.HTMLAttributes<HTMLButtonElement>
  > = props => <Next onClick={props.onClick}>{'>'} </Next>

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />
  }

  return (
    <div>
      <Slider {...settings}>
        {jsonData.map((item, index) => (
          <Slide key={index}>
            <img
              src={item.snippet.thumbnails.standard.url}
              alt="Thumbnail"
            />
          </Slide>
        ))}
      </Slider>
    </div>
  )
}

const Prev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 10;
  color: red;
  background-color: ${props => props.theme.main.ft_color_w};
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  content-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`
const Next = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  color: red;
  background-color: ${props => props.theme.main.ft_color_w};
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`

const Slide = styled.div`
  position: relative;
  height: 60vh;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
    object-fit: cover;
  }
`
