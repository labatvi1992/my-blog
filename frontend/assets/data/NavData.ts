import { TLanguageData, TNavItem } from "@/common/types/TNav"

const NavData: TNavItem[] = [
  { id: "Home", name: "Home", slug: "HomeUrl" },
  { id: "About", name: "About", slug: "AboutUrl" },
  { id: "Blog", name: "Blog", slug: "BlogUrl" },
  { id: "Store", name: "Store", slug: "StoreUrl" },
]

export const EnglishLanguage = "en-US"
export const VietnameseLanguage = "vi-VN"

const LanguageData: TLanguageData = {}
LanguageData[EnglishLanguage] = {
  id: EnglishLanguage,
  name: "English",
  icon: "/img/lang/english.svg",
}
LanguageData[VietnameseLanguage] = {
  id: VietnameseLanguage,
  name: "Vietnamese",
  icon: "/img/lang/vietnamese.svg",
}

export { LanguageData }

export default NavData
