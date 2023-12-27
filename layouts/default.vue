<template>
    <main class="flex flex-col p-6 sm:p-8 gap-16 mx-auto max-w-6xl w-full">
        <header class="flex justify-between items-center">
            <UiLink to="/" class="font-semibold sm:text-lg"> moritzmla.co </UiLink>

            <UiButton to="mailto:moritz.mueller@coverbase.co" :as="NuxtLink">
                <span class="px-2"> Kontakt aufnehmen </span>
            </UiButton>
        </header>

        <slot />

        <footer class="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p>Copyright {{ new Date().getFullYear() }}</p>

            <div class="flex gap-2">
                <UiButton
                    variant="text"
                    target="_blank"
                    :to="social.url"
                    :as="NuxtLink"
                    v-for="social in socials"
                >
                    <component :is="social.icon" />
                </UiButton>
            </div>
        </footer>
    </main>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

const { socials } = useAppConfig();
</script>
