import { TSectionProp } from "@/common/types/TSection"

const Section = (prop: TSectionProp) => {
  const { header, children } = prop || {}
  const { title, right } = header || {}
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container px-2">
                <div className="row py-3">
                  <div className="col-md-8 text-start">
                    <p className="lead text-dark pt-1 mb-0">{title}</p>
                  </div>
                  <div className="d-none col-md-4 text-end my-auto d-sm-block">
                    {right}
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
