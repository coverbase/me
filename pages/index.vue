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
        <figure class="flex flex-col gap-4 items-center" v-for="{ image, name } in skills">
            <img width="60" height="60" class="m-auto" :alt="name" :src="image" />

            <figcaption class="font-semibold">
                {{ name }}
            </figcaption>
        </figure>
    </section>
</template>

<script setup lang="ts">
const { skills } = useAppConfig();
</script>
