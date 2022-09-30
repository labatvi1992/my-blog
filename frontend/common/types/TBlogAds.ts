import { TBlogArticleItem } from "./TBlogArticle"
import { TMediaItem } from "./TMedia"

type TBlogAdsProp = {
  id: number
  attributes: {
    title: string
    description?: string
    articles: {
      data: TBlogArticleItem[]
    }
    banner: {
      data: TMediaItem[]
    }
    postNumber: number
    visiterNumber: number
  }
}

export type { TBlogAdsProp }
