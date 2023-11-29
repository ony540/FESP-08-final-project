import { baseInstance } from '@API'
import { VideoItem } from '@types'

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const getMainData = async ({ pageParam }: { pageParam: string }) => {
  try {
    const reqUrl = `videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=KR&key=${API_KEY}&pageToken=${pageParam}`
    const res = await baseInstance(reqUrl)
    const data = await res.data
    const Items: VideoItem[] = data.items
    const NextToken = data.nextPageToken

    return {
      results: Items,
      NextToken: NextToken
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
