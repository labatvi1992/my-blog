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
}

export type { TBlogCategoryItem, TBlogCategoryProp }
