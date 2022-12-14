export default {
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

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
    '@nuxtjs/auth',
    'vue-toastification/nuxt'
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
          logout: { url: 'https://run.mocky.io/v3/550028d1-a82f-4cae-9c97-aac0dbddac74', method: 'post' },
          user: { url: 'https://run.mocky.io/v3/7b1743f5-5650-4353-92cc-081ee6a07564', method: 'get', propertyName: false }
        },
      }
    },   
    redirect: {
      login: '/login',
      home: '/home',
    },
    plugins: ['./plugins/auth.js',
      '~/plugins/vue-select.js'],
    localStorage: false,
    resetOnError: true,
  },
}





