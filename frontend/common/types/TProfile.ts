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

type TProjectProp = {
  data?: TProject[]
}

type TProfileProp = {
  id: number
  attributes: {
    name: string
    jobTitle: string
    avatar?: TMediaItem
    welcome?: TWelcomeData
    personal?: string
    overview?: string
    education?: string
    workExperiences?: string
    projects?: TProject[]
  }
}

export type { TProfileHeaderProp, TProfileProp, TProject, TProjectProp }
