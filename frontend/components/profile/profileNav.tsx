const ProfileNav = () => {
  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item px-3">
        <a href="#overview" className="nav-link scrollto active">
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
