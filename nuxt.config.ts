// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolvePath } from '@nuxt/kit'

export default async () => defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        app: await resolvePath('./src'),
        '@app': await resolvePath('./src'),
        '@components': await resolvePath('./src/components')
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: [
        '~/assets/styles/main.css'
    ]
})
