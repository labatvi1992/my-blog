const Footer = () => {
  return (
    <footer className="footer py-5 bg-gradient-dark position-relative overflow-hidden">
      <img
        src="/img/shapes/waves-white.svg"
        alt="pattern-lines"
        className="position-absolute start-0 top-0 w-100 opacity-6"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
            <h6 className="text-white font-weight-bolder text-uppercase mb-lg-4 mb-3">
              Soft
            </h6>
            <ul className="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white opacity-8"
                  href="https://www.creative-tim.com"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white opacity-8"
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white opacity-8"
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white opacity-8"
                  href="https://www.creative-tim.com"
                  target="_blank"
                >
                  Services
                </a>
              </li>
            </ul>
            <p className="text-sm text-white opacity-8 mb-0">
              Copyright © <strong>{new Date().getFullYear()}</strong> All Right
              Reserved.
            </p>
          </div>
          <div className="col-lg-6 ms-auto text-lg-end text-center">
            <p className="mb-5 text-lg text-white font-weight-bold">
              One of the best way to improve your skills is sharing your
              knowledge. By this way, you will get more than what you expect.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
