import { fetchAPI } from "@/common/helpers/api"

export { default } from "./index"

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
