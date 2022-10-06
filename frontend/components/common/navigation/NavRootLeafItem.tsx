import React from "react"
import Link from "next/link"

import { TNavItem } from "@/common/types/TNav"

const NavRootItem = (prop: TNavItem) => {
  const { name, slug, icon, className, active } = prop || {}

  return (
    <li className={className}>
      <Link href={slug}>
        <a className="nav-link nav-link-icon ps-2">
          {icon && <i className={`${icon} ${active ? "fw-bolder" : ""}`} />}
          <p
            className={`d-inline text-sm text-uppercase ${
              active ? "fw-bolder" : ""
            } z-index-1`}
          >
            {name}
          </p>
        </a>
      </Link>
    </li>
  )
}

export default NavRootItem
