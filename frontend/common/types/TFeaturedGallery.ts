import { TBlogArticleItem } from "./TBlogArticle"
import { TMediaItem } from "./TMedia"

type TFeaturedGalleryData = {
  id: number
  attributes: {
    title: string
    description?: string
    gallery: {
      data: TMediaItem[]
    }
    articles: {
      data: TBlogArticleItem[]
    }
  }
}

type TFeaturedGalleryProp = {
  data?: TFeaturedGalleryData
}

export type { TFeaturedGalleryData, TFeaturedGalleryProp }
