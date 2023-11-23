import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  `https://${process.env.REACT_APP_SUPABASE_PROJECT_ID}.supabase.co`,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  process.env.REACT_APP_SUPABASE_PROJECT_API_KEY!
)

export const TABLE_NAME = 'video_comment'
