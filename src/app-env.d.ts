/// <reference types="cheerio" />

declare module '*.md'

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare module 'format-message-generate-id' {
  const generate: { underscored_crc32: Function<string, string> };
  export default generate;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production',
    API_KEY: string,
    API_URL: string,
    HTTP_HOST: string,
  }
}

declare type TRoute = import('./core/schemas').TRoute
declare type Theme =  typeof import('./core/theme').default
