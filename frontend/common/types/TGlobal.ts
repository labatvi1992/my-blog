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

type TGlobalProp = {
  children: JSX.Element | JSX.Element[]
}

export type { TGlobalData, TGlobalProp }
