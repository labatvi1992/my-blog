import { TEcommerceProductItem } from "./TEcommerceProduct"
import { TMediaItem } from "./TMedia"

type TFeaturedProductData = {
  id: number
  attributes: {
    title: string
    description?: string
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

type TFeaturedProductProp = {
  data?: TFeaturedProductData
}

export type { TFeaturedProductData, TFeaturedProductProp }
