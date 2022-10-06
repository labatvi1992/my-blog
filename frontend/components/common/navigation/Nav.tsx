import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { TNavProp } from "@/common/types/TNav"
import NavItem from "./NavItem"
import NavLanguage from "./NavLanguage"

const defaultSlug = "/"

const Nav = (prop: TNavProp) => {
  const { t, i18n } = useTranslation("common", { useSuspense: false })
  const { title, navigation, languages } = prop || {}
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let lastScrollTop = 0
    const onScroll = () => {
      const navHeight = navRef?.current?.offsetHeight ?? 0
      document.body.style.paddingTop = navHeight + "px"
      let scroll_top = window.scrollY
      if (scroll_top <= lastScrollTop) {
        navRef?.current?.classList?.remove("scrolled-down")
        navRef?.current?.classList?.add("scrolled-up")
      } else {
        navRef?.current?.classList?.remove("scrolled-up")
        navRef?.current?.classList?.add("scrolled-down")
      }
      lastScrollTop = scroll_top
    }
    onScroll()
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          <nav
            ref={navRef}
            className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow-lg position-absolute start-0 end-0 mx-4"
          >
            <div className="container-fluid px-0">
              <Link href={t("HomeUrl", defaultSlug)}>
                <a className="navbar-brand font-weight-bolder ms-sm-3 h6">
                  {title}
                </a>
              </Link>
              <button
                className="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100"
                id="navigation"
              >
                <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
                  {(navigation || []).map((item) => (
                    <NavItem
                      key={item.id}
                      {...item}
                      name={t(item.name)}
                      slug={t(item.slug, defaultSlug)}
                    />
                  ))}
                  <NavLanguage i18n={i18n} data={languages} />
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav
