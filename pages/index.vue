<template>
    <section class="flex flex-col gap-4">
        <h1 class="text-4xl">
            Hallo, <br />
            mein Name ist
            <strong class="whitespace-nowrap font-bold"> Moritz Müller </strong>
        </h1>

        <UParagraph class="text-lg">
            Ich bin ein unabhängiger Entwickler aus <br />
            Nordrhein-Westfalen, Deutschland.
        </UParagraph>
    </section>

    <section class="flex flex-wrap gap-12">
        <figure class="flex flex-col gap-4 items-center" v-for="{ alt, path } in skills">
            <img width="60" height="60" class="m-auto" :alt="alt" :src="path" />

            <figcaption class="font-semibold">
                {{ alt }}
            </figcaption>
        </figure>
    </section>

    <UDivider />

    <UHeading class="text-center"> Projekte </UHeading>

    <section class="grid sm:grid-cols-2 gap-4">
        <div
            class="flex items-start gap-4 bg-white shadow-sm p-4 rounded"
            v-for="project in projects"
        >
            <div class="p-4 bg-slate-100 rounded">
                <component :is="project.icon" />
            </div>

            <div class="flex flex-col">
                <ULink
                    target="_blank"
                    class="font-semibold text-lg"
                    :to="project.route"
                    :as="NuxtLink"
                >
                    {{ project.title }}
                </ULink>

                <UParagraph> {{ project.description }} </UParagraph>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
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
