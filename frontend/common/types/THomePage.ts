import { TFeaturedBlogData } from "./TFeaturedBlog"
import { TFeaturedProductData } from "./TFeaturedProduct"
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
  featuredProduct?: TFeaturedProductData
  featuredBlog?: TFeaturedBlogData
}

export type { THomePageData, THomePageProp }
