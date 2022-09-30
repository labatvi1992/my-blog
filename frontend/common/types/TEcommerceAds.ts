import { TEcommerceProductItem } from "./TEcommerceProduct"
import { TMediaItem } from "./TMedia"

type TEcommerceAdsProp = {
  id: number
  attributes: {
    galleryAds: {
      data: TMediaItem[]
    }
    productAds: {
      data: TEcommerceProductItem[]
    }
  }
}

export type { TEcommerceAdsProp }
