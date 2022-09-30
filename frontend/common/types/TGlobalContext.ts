import { TMediaItem } from "./TMedia"

type TGlobalContext = {
  siteName?: string
  defaultSeo?: {
    metaTitle?: string
    metaDescription?: string
    shareImage?: TMediaItem
  }
}

export default TGlobalContext
