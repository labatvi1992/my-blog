import { fetchAPI } from "@/common/helpers/api"
import { getStrapiMedia } from "@/common/helpers/media"
import { TBlogArticleItem } from "@/common/types/TBlogArticle"
import { TBlogCategoryItem } from "@/common/types/TBlogCategory"
import { TGlobalData } from "@/common/types/TGlobal"
import AnimatedText from "@/components/common/animatedText"
import Hero from "@/components/common/hero"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import Articles from "./articles"
import Categories from "./categories"

type TBlogProp = {
  global?: TGlobalData
  categories?: {
    data: TBlogCategoryItem[]
  }
  articles?: {
    data: TBlogArticleItem[]
  }
}

const Blog = ({ global, categories, articles }: TBlogProp) => {
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
      <section className="py-sm-5 py-5 min-vh-100">
        <div className="container">
          <Categories
            data={categories?.data ?? []}
            articleCount={articles?.data?.length}
          >
            <Articles articles={articles?.data ?? []} />
          </Categories>
        </div>
      </section>
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
    filters: { slug: params?.slug },
    populate: {
      children: {
        populate: "*",
      },
    },
  })
  const articles = await fetchAPI("/articles", {
    populate: {
      category: "*",
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
