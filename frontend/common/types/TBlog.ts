import { TBlogArticleItem } from "./TBlogArticle"
import { TBlogCategoryItem } from "./TBlogCategory"
import { TGlobalData } from "./TGlobal"
import { TPageProp } from "./TPage"

type TBlogWelcomeProp = {
  global?: TGlobalData
}

type TBlogSectionProp = {
  categories?: TBlogCategoryItem[]
  articles?: TBlogArticleItem[]
}

type TBlogResponse = {
  categories?: {
    data: TBlogCategoryItem[]
  }
  articles?: {
    data: TBlogArticleItem[]
  }
}

type TBlogProp = {} & TPageProp<TBlogResponse>

export type { TBlogWelcomeProp, TBlogSectionProp, TBlogResponse, TBlogProp }
