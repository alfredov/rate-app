import getLocale, { Locale } from './index'

describe('utils::getLocale', () => {
  it('should get "es" language', () => {
    Object.defineProperty(window, 'navigator', {
      value: { languages: ['es', 'en'] },
      writable: true,
    })
    expect(getLocale(window.navigator)).toBe(Locale.ES)
  })

  it('should get "en" language', () => {
    Object.defineProperty(window, 'navigator', {
      value: { languages: ['en-US', 'en', 'es', 'pt'] },
      writable: true,
    })
    expect(getLocale(window.navigator)).toBe(Locale.EN)
  })

  it('should get by default "en" language when language is not "en" or "es"', () => {
    Object.defineProperty(window, 'navigator', {
      value: { languages: ['pt'] },
      writable: true,
    })

    expect(getLocale(window.navigator)).toBe(Locale.EN)
  })
})
