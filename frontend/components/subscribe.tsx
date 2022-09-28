const Subscribe = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card overflow-hidden mb-5">
              <div className="row">
                <div className="col-lg-7">
                  <form className="p-3" id="contact-form" method="post">
                    <div className="card-header">
                      <h2>Get new posts delivered to your inbox</h2>
                    </div>
                    <div className="card-body pt-1">
                      <div className="row">
                        <div className="col-8">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control mb-sm-0"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-4 ps-0">
                          <button
                            type="button"
                            className="btn bg-gradient-info mb-0 h-100 position-relative z-index-2"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="col-lg-5 position-relative bg-cover px-0"
                  style={{
                    backgroundImage: "url('/img/curved-images/curved5.jpg')",
                  }}
                >
                  <div className="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
                    <img
                      src="/img/wave-1.svg"
                      className="h-100 ms-n2"
                      alt="vertical-wave"
                    />
                  </div>
                  <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                    <div className="mask bg-gradient-info opacity-9"></div>
                    <div className="d-flex align-items-center p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                      <h3 className="text-white">Subscribe News</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
