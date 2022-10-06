import Articles from "@/components/blog/articles"
import { fetchAPI } from "@/common/helpers/api"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"

const Category = ({ global, category, categories }) => {
  const seo = {
    metaTitle: category?.attributes?.name,
    metaDescription: `All ${category?.attributes?.name} articles`,
  }

  return (
    <Layout global={global}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category?.attributes?.name}</h1>
          <Articles articles={category?.attributes?.articles?.data ?? []} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
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

export default Category
