import { TEcommerceProductItem } from "./TEcommerceProduct"
import { TMediaItem } from "./TMedia"

type TProductAdsProp = {
  id: number
  attributes: {
    title: string
    galleryAds: {
      data: TMediaItem[]
    }
    productAds: {
      data: TEcommerceProductItem[]
    }
    saleProducts: {
      data: TEcommerceProductItem[]
    }
  }
}

export type { TProductAdsProp }
