import Seo from "@/components/common/seo"
import Layout from "@/components/common/layout"
import Hero from "@/components/common/hero"
import AnimatedText from "@/components/common/animatedText"
import Categories from "@/components/blog/categories"
import { fetchAPI } from "@/common/helpers/api"
import Articles from "@/components/blog/articles"
import { getStrapiMedia } from "@/common/helpers/media"

const Blog = ({ global, categories, articles }) => {
  console.log("categories: ", categories)
  console.log("articles: ", articles)
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.defaultSeo} />
      <Hero
        backgroundImage={getStrapiMedia(
          global?.attributes?.defaultSeo?.shareImage
        )}
      >
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={["Blog"]} loop />
        </h2>
      </Hero>
      <section className="py-sm-5 py-5 position-relative">
        <div className="container">
          <Categories data={categories?.data ?? []} />
          <Articles articles={articles?.data ?? []} />
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    populate: {
      children: {
        populate: "*",
      },
    },
  })
  const articles = await fetchAPI("/articles", {
    populate: {
      image: {
        populate: "*",
      },
    },
  })

  return {
    props: {
      categories: matchingCategories,
      articles: articles,
    },
    revalidate: 1,
  }
}

export default Blog
