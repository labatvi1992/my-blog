import { TBlogArticleItem } from "./TBlogArticle"

type TBlogAdsProp = {
  id: number
  attributes: {
    title: string
    description?: string
    articles: {
      data: TBlogArticleItem[]
    }
  }
}

export type { TBlogAdsProp }
