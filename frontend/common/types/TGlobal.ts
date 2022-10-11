import { TSeo } from "./TSeo"
import { TMediaItem } from "./TMedia"

type TGlobalData = {
  id: number
  attributes: {
    siteName?: string
    defaultSeo?: TSeo
    favicon?: TMediaItem
  }
}

export type { TGlobalData }
