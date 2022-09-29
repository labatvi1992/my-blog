import { TSectionProp } from "@/common/types/TSection"

const Section = (prop: TSectionProp) => {
  const { header, shadow, children } = prop || {}
  const { title, right } = header || {}
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div
              className={`position-relative border-radius-xl overflow-hidden ${
                shadow ? "shadow-lg" : ""
              } mb-3`}
            >
              <div className="container px-2">
                <div className="row py-3">
                  <div className="col-md-8 text-start">{title}</div>
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
