import { deleteComment, getComments, uploadComment } from '@API'
import { CommentType } from '@types'
import { useEffect, useState } from 'react'

export const CommentsBox = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState<CommentType[]>([])

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

  const [comment, setComment] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const handleUploadForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const uploadedData = (await uploadComment({
      commentInput: comment,
      videoId
    })) as CommentType[]
    setComment('')
    setComments(prevData => [uploadedData[0], ...prevData])
  }

  const handleClickDelete = async (id: number) => {
    await deleteComment(id)
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <>
      <form onSubmit={handleUploadForm}>
        <input
          id="commentInput"
          type="text"
          placeholder="댓글을 달아주세요"
          value={comment}
          onChange={handleInputChange}
        />
        <label
          htmlFor="commentInput"
          className="a11y-hidden">
          댓글 달기
        </label>
        <button type="submit">작성</button>
      </form>

      <ul>
        {comments?.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <button
              type="button"
              onClick={() => handleClickDelete(comment.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
