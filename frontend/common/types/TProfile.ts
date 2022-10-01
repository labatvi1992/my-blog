import { TMediaItem } from "./TMedia"
import { TWelcomeData } from "./TWelcome"

type TProfileHeaderProp = {
  name: string
  avatar?: string
  jobTitle: string
}

type TProfileProp = {
  id: number
  attributes: {
    name: string
    jobTitle: string
    avatar?: TMediaItem
    welcome?: TWelcomeData
  }
}

export type { TProfileHeaderProp, TProfileProp }
