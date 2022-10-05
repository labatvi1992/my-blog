export function formatNumber(num: number, floatingNum: number, locale: string) {
  return num.toLocaleString(locale, { minimumFractionDigits: floatingNum })
}
