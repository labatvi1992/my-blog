type TBlogCategory = {
  id: number
  attributes: {
    name: string
    slug: string
    children: {
      data: TBlogCategory[]
    }
  }
}

export type { TBlogCategory }
