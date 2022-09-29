import React from "react"

type TCarouselItemProp = {
  active?: boolean
  children?: JSX.Element | React.Component
}

type TCarouselProp = {
  id: string
  height?: number
  showArrows?: boolean
  showIndicators?: boolean
  children?: JSX.Element[]
}

export type { TCarouselProp, TCarouselItemProp }
