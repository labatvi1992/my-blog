import { TMediaItem } from "./TMedia"

type TBlogAuthorData = {
  id: number
  attributes: {
    name: string
    picture?: TMediaItem
    email?: string
  }
}

export type { TBlogAuthorData }
