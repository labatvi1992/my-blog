import { TLanguageData, TNavItem } from "@/common/types/TNav"

export const HomeUrl = "/"
export const AboutUrl = "/about"
export const BlogUrl = "/blog"
export const BlogCategoryUrl = "/blog/[slug]"
export const BlogArticleUrl = "/blog/article/[slug]"

const NavData: TNavItem[] = [
  { id: "Home", name: "Home", slug: HomeUrl },
  { id: "About", name: "About", slug: AboutUrl },
  { id: "Blog", name: "Blog", slug: BlogUrl },
]

export const EnglishLanguage = "en"
export const VietnameseLanguage = "vi"

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
