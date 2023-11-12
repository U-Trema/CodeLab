// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {},
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: ['~/assets/theme/_main.scss'],
  image: {
    target: 'static',
    provider: 'twicpics',
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  modules: ['nuxt-lucide-icons', '@nuxt/image', '@nuxtjs/color-mode', ['nuxt-mail', {
    message: {
      to: process.env.EMAIL_USER,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD,
      },
    },
  }]],
  pages: true,
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/theme/_mixin.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      // EMAIL_USER: process.env.EMAIL_USER,
      // EMAIL_PWD: process.env.EMAIL_PWD,
    }
  }
  });

