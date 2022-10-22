import { gql } from "@apollo/client"

export const GLOBAL_QUERY = gql`
  query Global($locale: I18NLocaleCode) {
    global(locale: $locale) {
      data {
        attributes {
          siteName
          defaultSeo {
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
          favicon {
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
`
