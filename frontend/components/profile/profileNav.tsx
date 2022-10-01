const ProfileNav = () => {
  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item px-3">
        <a href="#overview" className="nav-link scrollto active">
          <i className="fas fa-fw fa-home me-1" aria-hidden="true" />
          Home
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#about" className="nav-link scrollto">
          <i className="fas fa-fw fa-user me-1" aria-hidden="true" />
          About
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#resume" className="nav-link scrollto">
          <i className="fas fa-fw fa-file me-1" aria-hidden="true" />
          Resume
        </a>
      </li>
      <li className="nav-item px-3">
        <a href="#services" className="nav-link scrollto">
          <i className="fas fa-fw fa-server me-1" aria-hidden="true" />
          Services
        </a>
      </li>
    </ul>
  )
}

export default ProfileNav
