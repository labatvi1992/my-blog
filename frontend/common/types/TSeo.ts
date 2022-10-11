import { TMediaItem } from "./TMedia"

export type TSeo = {
  metaTitle?: string
  metaDescription?: string
  shareImage?: { data: TMediaItem }
  article?: boolean
}
