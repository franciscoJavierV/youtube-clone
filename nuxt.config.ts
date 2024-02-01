// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  routes: [
      {
        name: 'login',
        path: '/login',
        component: 'pages/login.vue',
      },
      {
        name: 'feed',
        path: '/feed',
        component: 'pages/feed.vue',
      },
    ]
})