export interface UploadCommentProps {
  commentInput: string
  usernameInput: string
  videoId: string
}

export interface CommentType {
  username: string
  annonymous_user_id: string
  created_at: Date
  id: number
  text: string
  video_id: string
}
