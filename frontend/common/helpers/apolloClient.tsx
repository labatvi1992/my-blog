import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }/graphql`,
})
const client = new ApolloClient({
  cache,
  link,
})

export default client
