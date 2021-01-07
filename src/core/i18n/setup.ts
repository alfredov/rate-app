import t from 'format-message'
import generate from 'format-message-generate-id'

import getLocale from './getLocale'

const locale = getLocale(navigator)

export default () => {
  t.setup({
    locale,
    generateId: generate.underscored_crc32,
    missingTranslation: 'ignore',
    translations: { [locale]: require(`./${locale}.json`) },
  })
}
