import { createContext, useContext, useMemo } from "react"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/react-hooks"
import { TGlobalData, TGlobalProp } from "@/common/types/TGlobal"
import { showError } from "@/common/helpers/message"

const GLOBAL_QUERY = gql`
  query Global {
    global {
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
  const { children } = prop || {}
  const { data, loading, error } = useQuery<TGlobalData | null>(GLOBAL_QUERY, {
    variables: {},
  })

  const contextValue = useMemo(
    () => ({ loading, data, error }),
    [loading, data, error]
  )

  contextValue.error && showError(JSON.stringify(error))

  console.log("data: ", data)

  return (
    <GlobalContext.Provider value={contextValue.data}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
