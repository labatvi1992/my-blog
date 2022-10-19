import { createContext, useContext, useMemo } from "react"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/react-hooks"
import {
  TGlobalData,
  TGlobalProp,
  TGlobalResponse,
} from "@/common/types/TGlobal"
import { showError } from "@/common/helpers/message"

const GLOBAL_QUERY = gql`
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

const GlobalContext = createContext<TGlobalData | null>(null)

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  return context
}

const GlobalContextProvider = (prop: TGlobalProp) => {
  const { locale, children } = prop || {}
  const { data, loading, error } = useQuery<TGlobalResponse | null>(
    GLOBAL_QUERY,
    {
      variables: { locale },
    }
  )

  const contextValue = useMemo(
    () => ({ loading, data, error }),
    [loading, data, error]
  )

  contextValue.error && showError(JSON.stringify(error))

  return (
    <GlobalContext.Provider value={contextValue.data?.global?.data}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
