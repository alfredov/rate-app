const webpack = require('webpack')
const { merge: webpackMerge } = require('webpack-merge')

const modeConfig = env => require(`./tools/webpack.${env}`)(env)
const presetConfig = require('./tools/loadPresets')
const alias = require('./tools/loadAlias')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000
                }
              }
            ]
          },
          {
            test:  /\.tsx?$/,
            use: 'ts-loader',
            exclude: [/node_modules/, /\.tests.tsx?$/],
    
          }
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias,
      },
      output: {
        filename: 'bundle.js',
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
