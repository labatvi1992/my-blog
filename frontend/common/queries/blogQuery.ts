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

export const BLOG_FILTER_QUERY = gql`
  query Blog($locale: I18NLocaleCode, $slug: String) {
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
    articles(locale: $locale, filters: { category: { slug: { eq: $slug } } }) {
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

export const ARTICLE_LIST_QUERY = gql`
  query Article($locale: I18NLocaleCode) {
    articles(locale: $locale) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

export const ARTICLE_QUERY = gql`
  query Blog($locale: I18NLocaleCode, $slug: String) {
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
    articles(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          description
          content
          publishedAt
          image {
            data {
              attributes {
                url
              }
            }
          }
          author {
            data {
              id
              attributes {
                name
                email
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
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
