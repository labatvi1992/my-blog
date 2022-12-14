import { createContext, useContext, useMemo } from "react"
import { useQuery } from "@apollo/client"
import {
  TGlobalData,
  TGlobalProp,
  TGlobalResponse,
} from "@/common/types/TGlobal"
import { showError } from "@/common/helpers/message"
import GLOBAL_QUERY from "@/common/queries/globalQuery"

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
