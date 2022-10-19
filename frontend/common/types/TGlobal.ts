import { TSeo } from "./TSeo"
import { TMediaItem } from "./TMedia"

type TGlobalResponse = {
  global: {
    data?: TGlobalData
  }
}

type TGlobalData = {
  id: number
  attributes: {
    siteName?: string
    defaultSeo?: TSeo
    favicon?: TMediaItem
  }
}

type TGlobalProp = {
  locale?: string
  children: JSX.Element | JSX.Element[]
}

export type { TGlobalResponse, TGlobalData, TGlobalProp }
