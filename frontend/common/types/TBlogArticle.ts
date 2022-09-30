import { TMediaItem } from "./TMedia"

type TBlogArticleItem = {
  id: number
  attributes: {
    title: string
    slug: string
    description?: string
    content?: string
    image?: {
      data: TMediaItem
    }
  }
}

type TBlogArticleProp = {}

export type { TBlogArticleItem, TBlogArticleProp }
