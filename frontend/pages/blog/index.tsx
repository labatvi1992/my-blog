import Articles from "@/components/blog/articles"
import { fetchAPI } from "@/common/helpers/api"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"

const Blog = ({ global, category, categories }) => {
  const seo = {
    metaTitle: category?.attributes?.name,
    metaDescription: `All ${category?.attributes?.name} articles`,
  }

  return (
    <Layout global={global}>
      <Seo seo={seo} />
      <section className="py-7 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{category?.attributes?.name}</h1>
              <Articles articles={category?.attributes?.articles?.data ?? []} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params?.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })
  const allCategories = await fetchAPI("/categories")

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  }
}

export default Blog
