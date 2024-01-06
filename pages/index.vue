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

    <section class="flex flex-col gap-4">
        <h2 class="text-2xl">Meine Projekte</h2>

        <div class="grid gap-6 md:grid-cols-2">
            <div
                class="border border-slate-200 shadow-sm p-6 rounded-lg"
                v-for="{ url, name, description } in projects"
            >
                <UiLink class="font-semibold text-lg" target="_blank" :to="url">
                    {{ name }}
                </UiLink>

                <p class="text-slate-600">
                    {{ description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { skills, projects } = useAppConfig();
</script>
