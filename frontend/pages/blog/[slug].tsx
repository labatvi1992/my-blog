import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { BLOG_FILTER_QUERY } from "@/common/queries/blogQuery"
import { TBlogResponse } from "@/common/types/TBlog"
import apolloClient from "@/common/helpers/apolloClient"

export { default } from "./index"

export const getServerSideProps = async ({ locale, params }) => {
  const response = await apolloClient.query<TBlogResponse | null>({
    query: BLOG_FILTER_QUERY,
    variables: { locale, slug: params?.slug },
  })
  return {
    props: {
      ...response,
      ...(await serverSideTranslations(locale, ["common", "blog"])),
    },
  }
}
