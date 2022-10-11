import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "@/common/helpers/api"
import Layout from "@/components/common/layout"
import NextImage from "@/components/common/image"
import Seo from "@/components/common/seo"
import { getStrapiMedia } from "@/common/helpers/media"
import Hero from "@/components/common/hero"
import AnimatedText from "@/components/common/animatedText"

const Article = ({ global, article, categories }) => {
  const imageUrl = getStrapiMedia(article?.attributes?.image)

  const seo = {
    metaTitle: article?.attributes?.title,
    metaDescription: article?.attributes?.description,
    shareImage: article?.attributes?.image,
    article: true,
  }

  return (
    <Layout global={global}>
      <Seo seo={seo} />
      <Hero backgroundImage={imageUrl}>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={[article?.attributes?.title]} loop />
        </h2>
      </Hero>
      <section className="py-sm-5 py-5 min-vh-100">
        <div className="container">
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={imageUrl}
            data-srcset={imageUrl}
            data-uk-img
          >
            <h1>{article?.attributes?.title}</h1>
          </div>
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <ReactMarkdown
                source={article?.attributes?.content}
                escapeHtml={false}
              />
              <hr className="uk-divider-small" />
              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  {article?.attributes?.author?.picture && (
                    <NextImage image={article?.attributes?.author?.picture} />
                  )}
                </div>
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    By {article?.attributes?.author?.name}
                  </p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">
                      {article?.attributes?.published_at}
                    </Moment>
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
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
