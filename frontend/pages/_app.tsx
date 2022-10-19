import React from "react"
import { appWithTranslation } from "next-i18next"
import NextNProgress from "nextjs-progressbar"
import { ToastContainer } from "react-toastify"
import { ApolloProvider } from "@apollo/react-hooks"
import GlobalContextProvider from "@/components/common/globalContext"
import Favicon from "@/components/common/favicon"
import apolloClient from "@/common/helpers/apolloClient"

import "react-toastify/dist/ReactToastify.min.css"
import "../assets/scss/soft-design-system.scss"

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalContextProvider locale={router.locale}>
          <Favicon />
          <Component {...pageProps} />
        </GlobalContextProvider>
      </ApolloProvider>
      <NextNProgress
        options={{ easing: "ease", speed: 500 }}
        showOnShallow={true}
      />
      <ToastContainer />
    </>
  )
}

export default appWithTranslation(MyApp)
