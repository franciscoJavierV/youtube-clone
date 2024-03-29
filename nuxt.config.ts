// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: ["@nuxt/ui" , '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [{
      code:"en-US",
      iso:"en-US",
      name:"English(US)",
      file:"en-US.json",
    }, {
      code:"es-COL",
      iso:"en-COL",
      name:"Spanish(COL)",
      file:"es-COL.json",
    }],
    defaultLocale: "en-US",
  },
  head: {
    script: [
      {
        src: 'https://www.youtube.com/iframe_api',
        async: true,
      },
    ],
  },

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
      "./pages/feed.vue" : { ssr :false , isr:true }, //csr
      "./pages/login.vue" : {ssr:false},
      "./pages/register" : { srr:false}
    }
})