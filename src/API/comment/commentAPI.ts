import { UploadCommentProps } from '@types'
import { TABLE_NAME, supabase } from './client'

export const getComments = async (videoId: string) => {
  try {
    const data = await supabase
      .from(TABLE_NAME)
      .select()
      .eq('video_id', videoId)
      .order('created_at', { ascending: false })
    return data.data
  } catch (error) {
    console.log('error when getComments', error)
  }
}

export const uploadComment = async ({
  commentInput,
  videoId
}: UploadCommentProps) => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({ text: commentInput, video_id: videoId })
      .select()
    if (error) console.log('error when uploadComment', error)
    return data
  } catch (error) {
    console.log('error when uploadComment', error)
  }
}

export const deleteComment = async (id: number) => {
  try {
    await supabase.from(TABLE_NAME).delete().eq('id', id).select()
  } catch (error) {
    console.log('error when getComments', error)
  }
}
