import { baseInstance } from '@API'

const apyKey = process.env.REACT_APP_YOUTUBE_API

export const getDetailVideo = async (id: string) => {
  try {
    const res = await baseInstance(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apyKey}`
    )
    return res.data
  } catch (error) {
    console.log('getDetailVideo error', error)
  }
}

export const getRelatedVideos = async (channelId: string) => {
  try {
    const res = await baseInstance(
      `search?part=snippet&channelId=${channelId}&type=video&maxResults=20&key=${apyKey}`
    )
    return res.data
  } catch (error) {
    console.log('getRelatedVideos error', error)
  }
}
