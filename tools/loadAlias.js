const path = require('path')
const { readdirSync } = require('fs')

const aliases = {}

const getModules = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

getModules(path.resolve(__dirname, '../src', 'packages')).forEach((alias) => {
  aliases[alias] = path.resolve(__dirname, '../src', 'packages', alias, 'src')
})

module.exports = aliases
