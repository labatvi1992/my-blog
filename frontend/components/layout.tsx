import React from "react"
import NavData, { LanguageData } from "assets/data/NavData"
import { Nav } from "./navigation"

const Layout = ({ children, global }) => (
  <>
    <Nav
      title={global?.attributes?.siteName}
      navigation={NavData}
      languages={LanguageData}
    />
    {children}
  </>
)

export default Layout
