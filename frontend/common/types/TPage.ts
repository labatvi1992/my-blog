import { ApolloError } from "@apollo/client"

type TPageProp<T> = {
  loading: boolean
  data: T
  error?: ApolloError
}

export type { TPageProp }
