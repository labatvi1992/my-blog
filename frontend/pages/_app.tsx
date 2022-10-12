import App from "next/app"
import Head from "next/head"

import React, { createContext } from "react"
import { fetchAPI } from "@/common/helpers/api"
import { TGlobalData } from "@/common/types/TGlobal"
import { getStrapiMedia } from "@/common/helpers/media"

import "../i18n"

import "../assets/scss/soft-design-system.scss"
import { getCurrentLocale } from "@/common/helpers/locale"

// Store Strapi Global object in context
export const GlobalContext = createContext<TGlobalData | null>(null)

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes?.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const currentLocale = getCurrentLocale()
  console.log("current:", currentLocale)
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
    locale: currentLocale,
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
