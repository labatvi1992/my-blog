import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { TNavItem } from "@/common/types/TNav"

const NavItem = (prop: TNavItem) => {
  const { name, slug, icon } = prop || {}
  const router = useRouter()
  const active = router.pathname === slug

  return (
    <li className="nav-item my-auto mx-2 my-0 py-0">
      <Link href={slug}>
        <a className="nav-link nav-link-icon ps-2">
          {icon && (
            <i
              className={`${icon} text-gradient ${
                active ? "fw-bolder text-primary" : ""
              }`}
            />
          )}
          <p
            className={`d-inline text-sm text-uppercase text-gradient ${
              active ? "fw-bolder text-primary" : "text-dark"
            } z-index-1`}
          >
            {name}
          </p>
        </a>
      </Link>
    </li>
  )
}

export default NavItem
