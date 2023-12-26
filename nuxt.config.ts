export default defineNuxtConfig({
    modules: ["@unocss/nuxt"],

    devtools: {
        enabled: false,
    },

    css: ["@unocss/reset/tailwind.css"],

    unocss: {
        safelist: [
            "overflow-y-scroll",
            "overflow-x-hidden",
            "font-sans",
            "text-base",
            "text-slate-900",
            "bg-slate-50",
        ],
    },

    app: {
        head: {
            title: "Moritz Müller - Unabhängiger Entwickler aus Deutschland",
            bodyAttrs: {
                class: "overflow-y-scroll overflow-x-hidden bg-slate-50 font-sans text-slate-900 text-base",
            },
        },
    },
});
