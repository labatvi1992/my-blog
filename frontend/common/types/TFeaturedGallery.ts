import { TBlogCategoryItem } from "./TBlogCategory"
import { TMediaItem } from "./TMedia"

type TFeaturedGalleryData = {
  id: number
  attributes: {
    title: string
    description?: string
    gallery: {
      data: TMediaItem[]
    }
    categories: {
      data: TBlogCategoryItem[]
    }
  }
}

type TFeaturedGalleryProp = {
  data?: TFeaturedGalleryData
}

export type { TFeaturedGalleryData, TFeaturedGalleryProp }
