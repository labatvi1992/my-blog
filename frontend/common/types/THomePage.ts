import { TFeaturedBlogData } from "./TFeaturedBlog"
import { TFeaturedGalleryData } from "./TFeaturedGallery"
import { TGlobalData } from "./TGlobal"
import { TSeo } from "./TSeo"
import { TWelcomeData } from "./TWelcome"

type THomePageData = {
  id: number
  attributes: {
    seo?: TSeo
    welcome?: TWelcomeData
  }
}

type THomePageProp = {
  global?: TGlobalData
  homepage?: THomePageData
  featuredGallery?: TFeaturedGalleryData
  featuredBlog?: TFeaturedBlogData
}

export type { THomePageData, THomePageProp }
