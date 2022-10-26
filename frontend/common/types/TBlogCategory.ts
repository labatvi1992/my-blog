type TBlogCategoryItem = {
  id: number
  attributes: {
    name: string
    slug: string
    description?: string
    children: {
      data: TBlogCategoryItem[]
    }
  }
}

type TBlogCategoryProp = {
  data?: TBlogCategoryItem[]
  articleCount?: number
  children: JSX.Element | JSX.Element[]
}

type TBlogCategoryData = {
  attributes: {
    slug: string
  }
}

type TBlogCategoryResponse = {
  categories?: {
    data?: TBlogCategoryData[]
  }
}

export type {
  TBlogCategoryItem,
  TBlogCategoryProp,
  TBlogCategoryData,
  TBlogCategoryResponse,
}
