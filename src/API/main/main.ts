import { baseInstance } from '@API'

const API_KEY = process.env.REACT_APP_YOUTUBE_API

export const getMainData = async () => {
  try {
    const res = await baseInstance(
      `/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${API_KEY}`
    )
    return res.data
  } catch (error) {
    console.error(error)
  }
}
