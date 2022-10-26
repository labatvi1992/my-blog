import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  TBlogArticleProp,
  TBlogArticleResponse,
} from "@/common/types/TBlogArticle"
import { TSeo } from "@/common/types/TSeo"
import Layout from "@/components/common/layout"
import ArticleWelcome from "@/components/advance/blog/articleWelcome"
import ArticleSection from "@/components/advance/blog/articleSection"
import { getStrapiMedia } from "@/common/helpers/media"
import { useGlobalContext } from "@/components/common/globalContext"
import { ARTICLE_QUERY } from "@/common/queries/blogQuery"
import apolloClient from "@/common/helpers/apolloClient"

const Article = (prop: TBlogArticleProp) => {
  const { articles, categories } = prop.data || {}
  const article = articles?.data?.length > 0 ? articles.data[0] : null
  const { title, image, description } = article?.attributes || {}
  const global = useGlobalContext()
  const imageUrl = getStrapiMedia(image)

  const seo: TSeo = {
    metaTitle: title,
    metaDescription: description,
    shareImage: image,
    article: true,
  }

  return (
    <Layout global={global}>
      <ArticleWelcome seo={seo} title={title} image={imageUrl} />
      <ArticleSection article={article} />
    </Layout>
  )
}

export const getServerSideProps = async ({ locale, params }) => {
  const response = await apolloClient.query<TBlogArticleResponse | null>({
    query: ARTICLE_QUERY,
    variables: { locale, slug: params.slug },
  })

  return {
    props: {
      ...response,
      ...(await serverSideTranslations(locale, ["common", "blog"])),
    },
  }
}

export default Article
