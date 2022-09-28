import React from "react"

type TSectionProp = {
  header: {
    title?: string | JSX.Element | JSX.Element[] | React.Component
    right?: JSX.Element | JSX.Element[] | React.Component
  }
  shadow?: boolean
  children?: JSX.Element | JSX.Element[] | React.Component
}

export type { TSectionProp }
