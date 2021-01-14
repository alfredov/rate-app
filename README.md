# 🍿 Rating movie and tv series App
API Data are coming from [themoviedb](https://www.themoviedb.org)

## This project has support to
- [x] Typescript
- [x] i18n translation, with `en` by default
- [x] Jest and cypress
- [x] Redux, rxjs and Redux Observables(we use it in epics)
- [x] storybook
- [x] unit test coverage tracking

## 🖥 How to run in local
- Install dependencies
```bash
yarn install
```
- ⚙️ Run for development
```bash
yarn start
``` 
This script open a new tab browser [localhost](http://0.0.0.0:8080)

- 🚀 To generate production bundle
```bash
yarn prod
```
It generates an `dist` folder which inside there are assets, index.html, bundle.js to run as a single page app
- 🧪 To run tests
```bash
yarn test
```

## 🇺🇸 🇪🇸 Extract translation files
```bash
yarn extract:i18n
```
For the default translation file run `yarn extract:i18n` that will generate an `en.json` in the corresponding [directory](src/core/i18n/en.json).
**HEADS UP** translations files will always be override 

You can extract for a specific lang like so `yarn extract:i18n:lang cl` will create a `cl.json` file.
