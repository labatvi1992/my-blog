import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { TNavItem } from "@/common/types/TNav"
import NavRootLeafItem from "./NavRootLeafItem"
import NavLeafItem from "./NavLeafItem"

const NavItem = (prop: TNavItem) => {
  const { name, slug, icon, parent, children } = prop || {}

  const router = useRouter()

  if (children && children.length > 0) {
    if (parent === undefined || parent === null) {
      return (
        <li className="nav-item dropdown dropdown-hover mx-2">
          <Link href={slug}>
            <a
              className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
              id={`dropdownMenu${slug}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {name}
              <img
                src="/img/down-arrow-dark.svg"
                alt="down-arrow"
                className="arrow ms-1"
              />
            </a>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-animation dropdown-lg dropdown-lg-responsive p-3 border-radius-lg mt-0 mt-lg-3"
            aria-labelledby={`dropdownMenu${slug}`}
          >
            <div className="d-none d-lg-block">
              {(children || []).map((item: TNavItem, itemIndex: number) => (
                <NavItem key={itemIndex} {...item} />
              ))}
            </div>
          </ul>
        </li>
      )
    }
    return (
      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
        <Link href={slug}>
          <a className="dropdown-item py-2 ps-3 border-radius-md">
            <div className="d-flex">
              {icon && (
                <div className="icon h-10 me-3 d-flex mt-1">
                  <i className={`${icon} text-gradient text-primary`} />
                </div>
              )}
              <div className="w-100 d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                    {name}
                  </h6>
                </div>
                <img
                  src="/img/down-arrow.svg"
                  alt="down-arrow"
                  className="arrow"
                />
              </div>
            </div>
          </a>
        </Link>
        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
          {(children || []).map((item: TNavItem, itemIndex: number) => (
            <NavItem key={itemIndex} {...item} />
          ))}
        </div>
      </li>
    )
  }

  if (parent === undefined) {
    return (
      <NavRootLeafItem
        {...prop}
        className={`nav-item my-auto mx-2 my-0 py-0`}
        active={router.pathname === slug}
      />
    )
  }

  return <NavLeafItem {...prop} />
}

export default NavItem
