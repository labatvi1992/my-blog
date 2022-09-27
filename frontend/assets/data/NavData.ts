import { TLanguageItem, TNavItem } from "@/common/types/TNav"

const NavData: TNavItem[] = [
  { id: "Home", name: "Home", slug: "HomeUrl" },
  { id: "About", name: "About", slug: "AboutUrl" },
  { id: "Blog", name: "Blog", slug: "BlogUrl" },
  { id: "Store", name: "Store", slug: "StoreUrl" },
]

export const LanguageData: TLanguageItem[] = [
  { id: "en-US", name: "English", icon: "/img/lang/english.png" },
  { id: "vi-VN", name: "Vietnamese", icon: "/img/lang/vietnamese.png" },
]

export default NavData
