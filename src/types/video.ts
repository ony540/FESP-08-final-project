export interface VideoSnippet {
  categoryId: string
  channelId: string
  channelTitle: string
  defaultAudioLanguage: string
  defaultLanguage: string
  description: string
  liveBroadcastContent: string
  localized: {
    description: string
    title: string
  }
  publishedAt: string
  tags: string[]
  thumbnails: {
    default: {
      height: number
      url: string
      width: number
    }
    high: {
      height: number
      url: string
      width: number
    }
    maxres: {
      height: number
      url: string
      width: number
    }
    medium: {
      height: number
      url: string
      width: number
    }
    standard: {
      height: number
      url: string
      width: number
    }
  }
  title: string
}

export interface VideoItem {
  etag: string
  id: string
  kind: string
  snippet: VideoSnippet
}

export interface RelatedVideoItem {
  etag: string
  id: RelatedId
  kind: string
  snippet: VideoSnippet
}

export interface RelatedId {
  kind: string
  videoId: string
}

export interface VideoListResponse {
  etag: string
  items: VideoItem[]
  kind: string
  nextPageToken: string
  pageInfo: {
    resultsPerPage: number
    totalResults: number
  }
}

export interface ThumbnailImg {
  $image?: string
  $height?: number
}
