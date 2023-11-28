import { baseInstance } from '@API'

const API_KEY = process.env.REACT_APP_YOUTUBE_API

// getMainData 함수에 기본 매개변수를 추가ƒ
export const getMainData = async ({
  nextPageToken
}: {
  nextPageToken: string
}) => {
  try {
    const reqUrl = `videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=KR&key=${API_KEY}&pageToken=${nextPageToken}`

    const res = await baseInstance(reqUrl)
    const data = await res.data
    return data
  } catch (error) {
    console.error(error)

    throw error
  }
}
