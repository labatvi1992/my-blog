import apolloClient from "@/common/helpers/apolloClient"
import BLOG_QUERY from "@/common/queries/blogQuery"
import { TBlogResponse } from "@/common/types/TBlog"
import { TBlogCategoryResponse } from "@/common/types/TBlogCategory"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export { default } from "./index"

export async function getStaticPaths({ locale }) {
  const response = await apolloClient.query<TBlogCategoryResponse | null>({
    query: BLOG_QUERY,
    variables: { locale },
  })
  return {
    paths:
      response?.data.categories?.data?.map((category) => ({
        params: {
          slug: category.attributes.slug,
        },
      })) ?? [],
    fallback: false,
  }
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
