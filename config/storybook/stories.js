
import React from 'react'
import t from 'format-message'
import generate from 'format-message-generate-id'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import theme from '../../src/core/theme'

const setupTranslation = locale => t.setup({
  generateId: generate.underscored_crc32,
  locale,
  missingTranslation: 'ignore',
  translations: {
    [locale]: require(`../../src/core/i18n/${locale}.json`),
  },
})

setupTranslation('en')

const styles = {
  container: {
    fontSize: '1rem',
    margin: 0,
    padding: '0.5em',
  },
  holder: {
    position: 'relative'
  },
  actions: {
    position: 'fixed',
    bottom: 0,
    left: '1em',
  }
}

class StoriesHolder extends React.PureComponent {
  state = {
    locale: 'en'
  }

  onChangeLocale = ({ currentTarget: { value }}) => this.setLocale(value)

  setLocale = locale => this.setState(() => {
    setupTranslation(locale)
    return { locale }
  })

  render() {
    const { locale } = this.state
    return (
      <div style={styles.container} key={locale}>
        <div style={styles.holder}>
          {this.props.children || <h3>Loading..</h3>}
        </div>
        <div style={styles.actions}>
          <button
            label="English"
            onClick={this.onChangeLocale}
            color={locale === 'en' ? 'primary' : 'secondary'}
            value="en"
          >
            <span role="img" aria-label="en">🇺🇸</span>
          </button>
          <button
            label="Español"
            onClick={this.onChangeLocale}
            color={locale === 'es' ? 'primary' : 'secondary'}
            value="es"
          >
            <span role="img" aria-label="es">🇪🇸</span>
          </button>
        </div>
      </div>
    )
  }
}

export const StoriesContainer = StoriesHolder

export const StoriesEnvironment = ({ children }) => {
  return (
    <StoriesContainer>
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
    </StoriesContainer>
  )
}

export const withEnvironment = Story => <StoriesEnvironment><Story /></StoriesEnvironment>

export default StoriesEnvironment
