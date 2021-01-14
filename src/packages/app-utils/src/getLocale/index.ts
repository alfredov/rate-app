export enum Locale {
  EN = 'en',
  ES = 'es',
}

export default (navigator: Navigator): Locale => {
  const browserLocale = (navigator.languages && navigator.languages.length) ? (
    navigator.languages[0]
  ) : navigator.language

  if (/en/.test(browserLocale)) { return Locale.EN }
  if (/es/.test(browserLocale)) { return Locale.ES }
  return Locale.EN
}
