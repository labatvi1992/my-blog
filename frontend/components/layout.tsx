import React from "react"
import NavData from "assets/data/NavData";
import { Nav } from "./navigation";

const Layout = ({ children, global }) => (
  <>
    <Nav title={global?.attributes?.siteName} data={NavData} />
    {children}
  </>
)

export default Layout
