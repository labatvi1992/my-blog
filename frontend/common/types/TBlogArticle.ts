import { TBlogAuthorData } from "./TBlogAuthor"
import { TBlogCategoryItem } from "./TBlogCategory"
import { TMediaItem } from "./TMedia"
import { TPageProp } from "./TPage"
import { TSeo } from "./TSeo"

type TBlogArticleWelcomeProp = {
  seo?: TSeo
  title?: string
  image?: string
}

type TBlogArticleSectionProp = {
  article?: TBlogArticleItem
}

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

type TBlogArticleListData = {
  attributes: {
    slug: string
  }
}

type TBlogArticleListResponse = {
  articles?: {
    data?: TBlogArticleListData[]
  }
}

type TBlogArticleResponse = {
  categories?: {
    data: TBlogCategoryItem[]
  }
  articles?: {
    data: TBlogArticleItem[]
  }
}

type TBlogArticleProp = {} & TPageProp<TBlogArticleResponse>

export type {
  TBlogArticleWelcomeProp,
  TBlogArticleSectionProp,
  TBlogArticleItem,
  TBlogArticleProp,
  TBlogArticleListData,
  TBlogArticleListResponse,
  TBlogArticleResponse,
}
