import { TFeaturedBlogData } from "./TFeaturedBlog"
import { TFeaturedGalleryData } from "./TFeaturedGallery"
import { TPageProp } from "./TPage"
import { TSeo } from "./TSeo"
import { TWelcomeData } from "./TWelcome"

type THomePageData = {
  id: number
  attributes: {
    seo?: TSeo
    welcome?: TWelcomeData
  }
}

type THomeData = {
  homepage: {
    data?: THomePageData
  }
  featuredGallery: {
    data?: TFeaturedGalleryData
  }
  featuredBlog: {
    data?: TFeaturedBlogData
  }
}

type THomeProp = {} & TPageProp<THomeData>

export type { THomePageData, THomeData, THomeProp }
