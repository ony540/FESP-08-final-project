import { baseInstance } from '@API'

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

export const getSearchedVideo = async ({
  searchInput,
  nextPageToken
}: {
  searchInput: string
  nextPageToken: string
}) => {
  try {
    const res = await baseInstance(
      `search?part=snippet&maxResults=12&pageToken=${nextPageToken}&key=${apiKey}&q=${searchInput}`
    )
    return res.data
  } catch (error) {
    console.log('getDetailVideo error', error)
  }
}
