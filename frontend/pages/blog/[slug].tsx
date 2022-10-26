import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BLOG_QUERY from "@/common/queries/blogQuery"
import { TBlogResponse } from "@/common/types/TBlog"
import apolloClient from "@/common/helpers/apolloClient"

export { default } from "./index"

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
