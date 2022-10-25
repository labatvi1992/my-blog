import { gql } from "@apollo/client"

const ABOUT_QUERY = gql`
  query About($locale: I18NLocaleCode) {
    profile(locale: $locale) {
      data {
        attributes {
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
          name
          jobTitle
          avatar {
            data {
              attributes {
                url
              }
            }
          }
          personal
          overview
          education
          workExperiences
          projects {
            name
            jobTitle
            date
            description
          }
        }
      }
    }
  }
`

export default ABOUT_QUERY
