import { gql } from "@apollo/client"

const BLOG_QUERY = gql`
  query Blog($locale: I18NLocaleCode) {
    categories(locale: $locale) {
      data {
        id
        attributes {
          name
          slug
          description
        }
      }
    }
    articles(locale: $locale) {
      data {
        id
        attributes {
          title
          slug
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              id
            }
          }
        }
      }
    }
  }
`

export const CATEGORY_QUERY = gql`
  query Category($locale: I18NLocaleCode) {
    categories(locale: $locale) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

export default BLOG_QUERY
