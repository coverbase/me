import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno()],
    safelist: [
        "overflow-y-scroll",
        "overflow-x-hidden",
        "font-sans",
        "text-slate-900",
        "text-base",
        "bg-slate-50",
    ],
});
