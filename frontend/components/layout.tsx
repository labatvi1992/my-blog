import React from "react"
import { Nav } from "./navigation";

const Layout = ({ children, global }) => (
  <>
    <Nav title={global?.attributes?.siteName} />
    {children}
  </>
)

export default Layout
