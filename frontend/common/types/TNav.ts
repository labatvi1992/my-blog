import { i18n } from "i18next"

type TNavProp = {
  title: string
  navigation?: TNavItem[]
  languages?: TLanguageItem[]
}

type TNavItem = {
  id: string
  name: string
  slug: string
  icon?: string
  className?: string
  parent?: string
  children?: TNavItem[]
}

type TLanguageProp = {
  i18n: i18n
  data?: TLanguageItem[]
}

type TLanguageItem = {
  id: string
  name: string
  icon?: string
}

export type { TNavProp, TNavItem, TLanguageProp, TLanguageItem }
