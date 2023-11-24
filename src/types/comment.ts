export interface UploadCommentProps {
  commentInput: string
  videoId: string
}

export interface CommentType {
  annonymous_user_id: string
  created_at: Date
  id: number
  text: string
  video_id: string
}
