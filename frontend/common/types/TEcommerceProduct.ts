import { TMediaItem } from "./TMedia"

type TEcommerceProductItem = {
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

export type { TEcommerceProductItem }
