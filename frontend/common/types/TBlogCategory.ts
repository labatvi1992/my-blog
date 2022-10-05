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

export type { TBlogCategoryItem }
