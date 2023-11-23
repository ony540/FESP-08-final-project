import { getComments } from '@API'
import { useEffect, useState } from 'react'

export const CommentsBox = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getComments(videoId)
      setComments(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(comments)
  }, [comments])
  return <div></div>
}
