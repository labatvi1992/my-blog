import { useEffect, useMemo, useRef } from "react"
import { useTranslation } from "next-i18next"

const ProfileNav = () => {
  const ref = useRef<HTMLUListElement>(null)
  const { t } = useTranslation("about")

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY - 250
      const navbarLinks = ref.current?.querySelectorAll(".scrollto") ?? []
      // remove all active class
      navbarLinks.forEach((navbarlink) => {
        navbarlink.classList.remove("active")
      })
      // add active class to first item
      let actived = false
      navbarLinks.forEach((navbarlink) => {
        if (actived || !navbarlink.hash) return
        const section = document.querySelector<HTMLElement>(navbarlink.hash)
        if (!section) return
        if (
          position >= section.offsetTop - 50 &&
          position <= section.offsetTop + section.offsetHeight + 200
        ) {
          navbarlink.classList.add("active")
          actived = true
        }
      })
    }
    onScroll()
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  const component = useMemo(
    () => (
      <ul className="profile-nav nav nav-pills flex-column" ref={ref}>
        <li className="nav-item">
          <a href="#personal" className="nav-link scrollto px-4">
            <i className="fas fa-fw fa-info-circle me-2" aria-hidden="true" />
            {t("Personal")}
          </a>
        </li>
        <li className="nav-item">
          <a href="#overview" className="nav-link scrollto px-4">
            <i className="fas fa-fw fa-home me-2" aria-hidden="true" />
            {t("Overview")}
          </a>
        </li>
        <li className="nav-item">
          <a href="#education" className="nav-link scrollto px-4">
            <i className="fas fa-fw fa-user me-2" aria-hidden="true" />
            {t("Education")}
          </a>
        </li>
        <li className="nav-item">
          <a href="#work-experiences" className="nav-link scrollto px-4">
            <i className="fas fa-fw fa-file me-2" aria-hidden="true" />
            {t("Work Experiences")}
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link scrollto px-4">
            <i className="fas fa-fw fa-server me-2" aria-hidden="true" />
            {t("Projects")}
          </a>
        </li>
      </ul>
    ),
    [t]
  )

  return component
}

export default ProfileNav
