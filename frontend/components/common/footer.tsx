const Footer = () => {
  return (
    <footer className="footer py-4 bg-gradient-dark position-relative overflow-hidden">
      <img
        src="/img/shapes/waves-white.svg"
        alt="pattern-lines"
        className="position-absolute start-0 top-0 w-100 opacity-6"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center text-sm text-white opacity-8 mb-0">
              All rights reserved. Copyright ©{" "}
              <strong>{new Date().getFullYear()}</strong> by{" "}
              <a
                className="text-bold text-white"
                href="https://www.creative-tim.com/product/soft-ui-design-system"
                target="_blank"
              >
                Creative Tim Soft UI Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
