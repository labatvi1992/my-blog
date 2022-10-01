import { TMediaItem } from "./TMedia"

type TWelcomeData = {
  title: string
  content: string
  background: {
    data: TMediaItem
  }
  facebook: string
  github: string
  linkedin: string
}

type TWelcomeProp = {
  data?: TWelcomeData
}

export type { TWelcomeData, TWelcomeProp }
