<template>
    <section class="flex flex-col gap-4">
        <h1 class="text-4xl">
            Hallo, <br />
            mein Name ist
            <span
                class="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
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
const skills = [
    {
        path: "/logo/typescript.svg",
        alt: "TypeScript",
    },
    {
        path: "/logo/nuxt.svg",
        alt: "Nuxt",
    },

    {
        path: "/logo/nodejs.svg",
        alt: "Nodejs",
    },
];
</script>
