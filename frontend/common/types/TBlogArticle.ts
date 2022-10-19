import { TBlogAuthorData } from "./TBlogAuthor"
import { TBlogCategoryItem } from "./TBlogCategory"
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
    author?: {
      data: TBlogAuthorData
    }
    publishedAt: string
  }
}

type TBlogArticleProp = {
  article?: TBlogArticleItem
  categories?: TBlogCategoryItem[]
}

export type { TBlogArticleItem, TBlogArticleProp }
