import { TBlogAuthorData } from "./TBlogAuthor"
import { TBlogCategoryItem } from "./TBlogCategory"
import { TGlobalData } from "./TGlobal"
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
  global?: TGlobalData
  article?: TBlogArticleItem
  categories?: TBlogCategoryItem[]
}

export type { TBlogArticleItem, TBlogArticleProp }
