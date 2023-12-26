<template>
    <section class="flex flex-col gap-4">
        <h1 class="text-4xl">
            Hallo, <br />
            mein Name ist
            <strong class="whitespace-nowrap font-bold"> Moritz Müller </strong>
        </h1>

        <p class="text-slate-500 text-lg">
            Ich bin ein unabhängiger Entwickler aus <br />
            Nordrhein-Westfalen, Deutschland.
        </p>
    </section>

    <section class="flex flex-wrap gap-12">
        <figure class="flex flex-col gap-4 items-center" v-for="{ alt, path } in skills">
            <img width="60" height="60" class="m-auto" :alt="alt" :src="path" />

            <figcaption class="font-semibold">
                {{ alt }}
            </figcaption>
        </figure>
    </section>
</template>

<script setup lang="ts">
import { IconFileTypeSvg, IconPalette } from "@tabler/icons-vue";
import csharp from "~/assets/csharp.svg";
import nodejs from "~/assets/nodejs.svg";
import nuxt from "~/assets/nuxt.svg";
import typescript from "~/assets/typescript.svg";
import vue from "~/assets/vue.svg";

const skills = [
    {
        path: typescript,
        alt: "TypeScript",
    },
    {
        path: csharp,
        alt: "C#",
    },
    {
        path: nuxt,
        alt: "Nuxt",
    },
    {
        path: vue,
        alt: "Vue",
    },
    {
        path: nodejs,
        alt: "Nodejs",
    },
];

const projects = [
    {
        icon: IconFileTypeSvg,
        route: "https://coverbase.co",
        title: "coverbase.co",
        description: "Scalable Vector Graphics Editor",
    },
    {
        icon: IconPalette,
        route: "https://github.com/coverbase/ui",
        title: "UI",
        description: "Komponenten für Nuxt",
    },
];
</script>
