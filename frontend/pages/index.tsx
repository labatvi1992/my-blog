import { fetchAPI } from "@/common/helpers/api"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export { default } from "@/components/advance/home"

export const getServerSideProps = async ({ locale }) => {
  const [homepageRes, featuredGalleryRes, featuredBlogRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        seo: { populate: "*" },
        welcome: { populate: "*" },
      },
      locale,
    }),
    fetchAPI("/featured-gallery", {
      populate: {
        gallery: { populate: "*" },
        articles: { populate: "*" },
      },
      locale,
    }),
    fetchAPI("/featured-blog", {
      populate: {
        articles: { populate: "*" },
        banner: { populate: "*" },
        categories: { populate: "*" },
      },
      locale,
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
      featuredGallery: featuredGalleryRes.data,
      featuredBlog: featuredBlogRes.data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
