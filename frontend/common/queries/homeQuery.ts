import { gql } from "@apollo/client"

const HOME_QUERY = gql`
  query Home($locale: I18NLocaleCode) {
    homepage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
          welcome {
            title
            content
            background {
              data {
                attributes {
                  url
                }
              }
            }
            facebook
            linkedin
            github
          }
        }
      }
    }
    featuredGallery(locale: $locale) {
      data {
        attributes {
          title
          description
          gallery {
            data {
              attributes {
                url
              }
            }
          }
          articles {
            data {
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
              }
            }
          }
        }
      }
    }
    featuredBlog(locale: $locale) {
      data {
        attributes {
          title
          description
          articles {
            data {
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
              }
            }
          }
          banner {
            data {
              attributes {
                url
              }
            }
          }
          postNumber
          visiterNumber
        }
      }
    }
  }
`

export default HOME_QUERY
