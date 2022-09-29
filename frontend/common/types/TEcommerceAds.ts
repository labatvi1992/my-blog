import { TBlogProductItem } from "./TBlogProduct"
import { TMediaItem } from "./TMedia"

type TEcommerceAdsProp = {
  id: number
  attributes: {
    galleryAds: {
      data: TMediaItem[]
    }
    productAds: {
      data: TBlogProductItem[]
    }
  }
}

export type { TEcommerceAdsProp }
