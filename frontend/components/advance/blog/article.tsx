import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "@/common/helpers/api"
import { TBlogArticleProp } from "@/common/types/TBlogArticle"
import { TSeo } from "@/common/types/TSeo"
import Layout from "@/components/common/layout"
import NextImage from "@/components/common/image"
import Seo from "@/components/common/seo"
import { getStrapiMedia } from "@/common/helpers/media"
import Hero from "@/components/common/hero"
import AnimatedText from "@/components/common/animatedText"

const Article = ({ global, article, categories }: TBlogArticleProp) => {
  const { title, content, image, description, author, publishedAt } =
    article?.attributes || {}
  const imageUrl = getStrapiMedia(image)

  const seo: TSeo = {
    metaTitle: title,
    metaDescription: description,
    shareImage: image?.data,
    article: true,
  }

  return (
    <Layout global={global}>
      <Seo seo={seo} />
      <Hero backgroundImage={imageUrl}>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={[title]} loop />
        </h2>
      </Hero>
      <section className="py-sm-5 py-5 min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ReactMarkdown source={content} escapeHtml={false} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex">
                {author?.data?.attributes?.picture && (
                  <div
                    className="border border-4 rounded-circle"
                    style={{ width: 128, height: 128 }}
                  >
                    <NextImage
                      className="rounded-circle"
                      image={author?.data?.attributes?.picture}
                    />
                  </div>
                )}
                <div className="d-flex flex-column px-3">
                  <p className="lead mb-0">
                    By {author?.data?.attributes?.name}
                  </p>
                  <p className="text-dark">
                    <Moment format="MMM Do YYYY">{publishedAt}</Moment>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article?.attributes?.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: {
      author: {
        populate: {
          picture: "*",
        },
      },
    },
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
