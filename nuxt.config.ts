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
    ],

    runtimeConfig: {
      public: {
        apiKey: process.env.NUXT_FIREBASE_APIKEY,
        authDomain: process.env.NUXT_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NUXT_FIREBASE_PROJECTID,
        storageBucket: process.env.NUXT_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.NUXT_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.NUXT_FIREBASE_APPID,
        measurementId: process.env.NUXT_FIREBASE_MEASUREMENTID,
        youtubeApiKey: process.env.NUXT_YOUTUBE_APIKEY
      },

    },

    routesRules: {
      "./pages/feed.vue" : { ssr : false , isr:true }, //csr
      "./pages/login.vue" : {ssr:false},
      "./pages/register" : { srr:false}
    }
})