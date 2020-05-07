
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kevin Olson',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/light/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/light/favicon-16x16.png' },
      { rel: 'font', href: '/fonts/materialdesignicons-webfont.eot?v-5.1.45' },
      { rel: 'stylesheet', href: '/mdi.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylus/main.styl',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    [ '@nuxtjs/pwa', { manifest: false}],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
