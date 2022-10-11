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
  children: JSX.Element | JSX.Element[]
}

export type { TBlogCategoryItem, TBlogCategoryProp }
