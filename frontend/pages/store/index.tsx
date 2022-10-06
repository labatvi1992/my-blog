import React from "react"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"

const Store = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <section className="py-7 vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Store</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Store
