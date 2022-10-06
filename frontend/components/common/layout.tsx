import React from "react"
import NavData, { LanguageData } from "assets/data/NavData"
import { Nav } from "./navigation"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop"

const Layout = ({ children, global }) => (
  <>
    <Nav
      title={global?.attributes?.siteName}
      navigation={NavData}
      languages={LanguageData}
    />
    {children}
    <ScrollToTop />
    <Footer />
  </>
)

export default Layout
