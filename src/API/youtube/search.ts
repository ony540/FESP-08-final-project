import { baseInstance } from '@API'

const apiKey = process.env.REACT_APP_YOUTUBE_API

export const getSearchedVideo = async ({
  searchInput,
  nextPageToken
}: {
  searchInput: string
  nextPageToken: string | null
}) => {
  try {
    const res = await baseInstance(
      `search?part=snippet&maxResults=12&q=${searchInput}&key=${apiKey}&pageToken=${nextPageToken}`
    )
    return res.data
  } catch (error) {
    console.log('getDetailVideo error', error)
  }
}
