import Seo from "@/components/common/seo"
import Layout from "@/components/common/layout"

const Blog = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <section className="py-7 vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
