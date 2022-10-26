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

export default BLOG_QUERY
