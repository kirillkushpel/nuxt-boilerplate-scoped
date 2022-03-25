/* eslint-disable */
import webpack from 'webpack';
import { getWebpackAliases } from './config/webpack/aliases';
require('dotenv-flow').config({purge_dotenv: true});

const ESLintPlugin = require('eslint-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';
const NO_LINTER_PLUGINS = process.env.NO_LINTER_PLUGINS;
const API_URL = JSON.stringify(process.env.API_URL);
const IS_HTTPS = process.env.USE_HTTPS === 'true';

module.exports = {
  telemetry: false,
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false
  },
  target: 'server',
  head: {
    title: 'Nuxt-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Nuxt-boilerplate'},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' }
    ],
    htmlAttrs: {
      lang: 'ru'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css/normalize.css'
  ],
  plugins: [
    '~plugins/axios.ts' ,
    '~plugins/vue-bem-cn',
  ],
  messages: {
    loading: 'Loading...',
    error_404: 'Page not found',
    server_error: 'Page is temporary unavailable',
    nuxtjs: '',
    back_to_home: 'Back to homepage',
    server_error_details: '',
    client_error: 'Page not found',
    client_error_details: ''
  },
  loading: { color: '#E2D7D8' },
  build: {
    vendor: [
      'axios'
    ],
    transpile: [
      'vue-bem-cn'
    ],
    babel: {
      presets() {
        return [
          ["@nuxt/babel-preset-app", {
            useBuiltIns: 'entry',
            corejs: { version: 3 }
          }]
        ]
      },
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    },
    postCss: {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`
        }
      }
    },
    loaders: {
      scss: { sourceMap: false }
    },

    ...(!isDev && {
      optimizeCss: true,
      filenames: {
        app: ({ isDev }) => (isDev ? '[name].js' : 'js/[name].[contenthash].js'),
        chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
        css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
        img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
        font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
        video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]')
      },
      extractCSS: {
        ignoreOrder: true
      },
      optimization: {
        minimize: true
      },
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      },
      splitChunks: {
        layouts: false,
        pages: true,
        commons: true
      }
    }),
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'source-map';
      }

      if (!NO_LINTER_PLUGINS) {
        config.plugins.push(
          new ESLintPlugin({
            extensions: ['js', 'ts', 'vue']
          })
        );
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        ...getWebpackAliases()
      }
      config.resolve.symlinks = false;
    },
    plugins: [
      new webpack.DefinePlugin({
        USE_HTTPS: IS_HTTPS,
        IS_PRODUCTION: !isDev,
        API_URL: API_URL
      })
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    credentials: true,
    https: IS_HTTPS
  }
};
