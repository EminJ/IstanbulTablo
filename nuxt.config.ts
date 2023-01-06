// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    mongodbUrl: process.env.MONGODB_URL,
    secret:process.env.SECRET_KEY
  },
    app: {
        head: {
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css' },
          ],
        },
      },
    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})