# Features:
* Vue 2
* Nuxt
* Eslint & Stylelint
* Webpack 4
* Yarn 2
* TypeScript
* Storybook
* Cypress
* Vue-bem-cn

## Setup

``` bash
# install dependencies with yarn 2
$ yarn

# local development with hot-reload - default port is 3000
$ yarn dev

# build production version and run it
$ yarn build
$ yarn start

# generate a static project
$ npm run generate
```

## `.env`
`LINT_ON_BUILD` - Defines if linters should be used during local development

`USE_HTTPS` - Defines if Axios should perform requests via HTTPS

`API_URL` - Defines base API URL (https://axios.nuxtjs.org/options#baseurl).

Any `.env` entry can be overridden in `.env.local`, nuxt restart is required for changes to come into effect


## SCSS
* Vue-bem-cn is used for writing class names, more about it [here](https://github.com/c01nd01r/vue-bem-cn) 

## Linters
* Pre-configured Eslint && Stylelint
* Customizable configs
