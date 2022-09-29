import { TMediaItem } from "./TMedia"

type TBlogProductItem = {
  id: number
  attributes: {
    name: string
    slug: string
    price: number
    image: {
      data: TMediaItem
    }
  }
}

type TBlogProductProp = {}

export type { TBlogProductItem, TBlogProductProp }
