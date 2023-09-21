export default defineNuxtConfig({
    modules: ["@unocss/nuxt", "@vueuse/nuxt"],
    css: ["@unocss/reset/tailwind.css"],

    app: {
        head: {
            title: "Moritz Müller - Unabhängiger Entwickler aus Deutschland",
            bodyAttrs: {
                class: "overflow-y-scroll overflow-x-hidden bg-slate-50 font-sans text-slate-900 text-base",
            },
        },
    },

    vite: {
        vue: {
            script: {
                defineModel: true,
            },
        },
    },
});