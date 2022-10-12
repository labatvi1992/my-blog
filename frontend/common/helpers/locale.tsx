import { VietnameseLanguage } from "assets/data/NavData"
import { getCookie, setCookie } from "cookies-next"

const localeKey = "current_locale"

export function getCurrentLocale(): string {
  let currentLocale = getCookie(localeKey)
  if (currentLocale === undefined || currentLocale === null) {
    currentLocale = VietnameseLanguage
    setCurrentLocale(currentLocale)
  }
  return currentLocale?.toString()
}

export function setCurrentLocale(locale: string) {
  setCookie(localeKey, locale)
}
