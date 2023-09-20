<template>
    <section class="flex flex-col gap-4">
        <h1 class="text-4xl">
            Hallo, <br />
            mein Name ist
            <span
                class="whitespace-nowrap text-transparent font-bold bg-clip-text bg-gradient-to-rt from-blue-400 to-blue-600"
            >
                Moritz Müller
            </span>
        </h1>

        <p class="text-slate-400 text-lg">
            Ich bin ein unabhängiger Entwickler aus <br />
            Nordrhein-Westfalen, Deutschland.
        </p>
    </section>

    <section class="flex flex-wrap gap-12">
        <figure class="flex flex-col gap-4 items-center" v-for="skill in skills">
            <img width="60" height="60" class="m-auto" :alt="skill.alt" :src="skill.path" />

            <figcaption class="font-semibold">
                {{ skill.alt }}
            </figcaption>
        </figure>
    </section>
</template>

<script setup lang="ts">
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
</script>
