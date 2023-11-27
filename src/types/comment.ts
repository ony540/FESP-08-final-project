export interface UploadCommentProps {
  commentInput: string
  usernameInput: string
  videoId: string
  profileColor: string
}

export interface CommentType {
  username: string
  annonymous_user_id: string
  profile_color?: string
  created_at: Date
  id: number
  text: string
  video_id: string
}
