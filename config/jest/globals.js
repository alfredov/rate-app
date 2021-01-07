
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(media => ({
    matches: false,
    media,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

require('format-message').setup({
  generateId: require('format-message-generate-id').underscored_crc32,
  locale: 'en',
  missingTranslation: 'ignore',
  translations: { },
})
