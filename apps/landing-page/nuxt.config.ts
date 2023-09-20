export default defineNuxtConfig({
    modules: ["@unocss/nuxt", "@vueuse/nuxt"],
    css: ["@unocss/reset/tailwind.css"],

    app: {
        head: {
            title: "Coverbase",
            bodyAttrs: {
                class: "overflow-y-scroll overflow-x-hidden bg-slate-50 font-sans text-slate-900 text-base",
            },
        },
    },

    unocss: {
        safelist: [
            "overflow-y-scroll",
            "overflow-x-hidden",
            "font-sans",
            "text-slate-900",
            "text-base",
            "bg-slate-50",
        ],
    },

    vite: {
        vue: {
            script: {
                defineModel: true,
            },
        },
    },

    $production: {
        nitro: {
            preset: "cloudflare-pages",
        },
    },
});
