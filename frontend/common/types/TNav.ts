import { Ti18n } from "i18n"

type TLanguageItem = {
  id: string
  name: string
  icon?: string
}

type TLanguageData = {
  [key: string]: TLanguageItem
}

type TLanguageProp = {
  i18n: Ti18n
  data?: TLanguageData
}

type TNavProp = {
  title: string
  navigation?: TNavItem[]
  languages?: TLanguageData
}

type TNavItem = {
  id: string
  name: string
  slug: string
  icon?: string
}

export type { TNavProp, TNavItem, TLanguageProp, TLanguageData, TLanguageItem }
