import { TMediaItem } from "./TMedia"
import { TWelcomeData } from "./TWelcome"

type TProfileHeaderProp = {
  name: string
  avatar?: string
  jobTitle: string
}

type TProject = {
  name: string
  jobTitle?: string
  date: string
  description?: string
}

type TProfileProp = {
  id: number
  attributes: {
    name: string
    jobTitle: string
    avatar?: TMediaItem
    welcome?: TWelcomeData
    overview?: string
    education?: string
    workExperiences?: string
    projects?: {
      data: TProject[]
    }
  }
}

export type { TProfileHeaderProp, TProfileProp, TProject }
