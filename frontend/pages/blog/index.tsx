import { useMemo } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useGlobalContext } from "@/components/common/globalContext"
import { TBlogProp, TBlogResponse } from "@/common/types/TBlog"
import BlogWelcome from "@/components/advance/blog/blogWelcome"
import BlogSection from "@/components/advance/blog/blogSection"
import Layout from "@/components/common/layout"
import apolloClient from "@/common/helpers/apolloClient"
import BLOG_QUERY from "@/common/queries/blogQuery"

const Blog = (prop: TBlogProp) => {
  const { categories, articles } = prop.data || {}
  const global = useGlobalContext()

  const component = useMemo(
    () => (
      <Layout global={global}>
        <BlogWelcome global={global} />
        <BlogSection categories={categories?.data} articles={articles?.data} />
      </Layout>
    ),
    [global, categories, articles]
  )

  return component
}

export const getServerSideProps = async ({ locale }) => {
  const response = await apolloClient.query<TBlogResponse | null>({
    query: BLOG_QUERY,
    variables: { locale },
  })
  return {
    props: {
      ...response,
      ...(await serverSideTranslations(locale, ["common", "blog"])),
    },
  }
}

export default Blog
