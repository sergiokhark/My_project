import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - My_project',
    title: 'My_project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://run.mocky.io/v3/ad074fc8-d5a1-4099-bb8d-be08ada4e9c5', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'delete' },
          user: { url: 'https://run.mocky.io/v3/7b1743f5-5650-4353-92cc-081ee6a07564', method: 'get', propertyName: false }
        },
      }
    },   
    redirect: {
      login: '/login',
      home: '/users',
    },
    plugins: ['./plugins/auth.js'],
    localStorage: false,
    resetOnError: true,
  },
  //router: {
  //  middleware: ['auth']
  //}
}





