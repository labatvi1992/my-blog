import { useEffect, useRef } from "react"

const ProfileNav = () => {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY - 570
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

  return (
    <ul className="profile-nav nav nav-pills flex-column" ref={ref}>
      <li className="nav-item px-3">
        <a href="#personal" className="nav-link scrollto active">
          <i className="fas fa-fw fa-info-circle me-1" aria-hidden="true" />
          Personal
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#overview" className="nav-link scrollto">
          <i className="fas fa-fw fa-home me-1" aria-hidden="true" />
          Overview
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#education" className="nav-link scrollto">
          <i className="fas fa-fw fa-user me-1" aria-hidden="true" />
          Education
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#workExperiences" className="nav-link scrollto">
          <i className="fas fa-fw fa-file me-1" aria-hidden="true" />
          Work Experiences
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#projects" className="nav-link scrollto">
          <i className="fas fa-fw fa-server me-1" aria-hidden="true" />
          Projects
        </a>
      </li>
    </ul>
  )
}

export default ProfileNav
