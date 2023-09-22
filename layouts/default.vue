<template>
    <main class="flex flex-col p-6 sm:p-8 gap-16 mx-auto max-w-6xl w-full">
        <header class="flex justify-between items-center">
            <TextLink to="/" class="font-semibold sm:text-lg" :as="NuxtLink">
                moritzmueller.co
            </TextLink>

            <Button variant="gradient" to="mailto:moritz.mueller@coverbase.co" :as="NuxtLink">
                <span class="px-2"> Kontakt aufnehmen </span>
            </Button>
        </header>

        <slot />

        <footer class="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div class="flex gap-2">
                <p>Copyright {{ new Date().getFullYear() }}</p>

                <Paragraph> • </Paragraph>

                <TextLink to="/impressum" :as="NuxtLink"> Impressum </TextLink>
            </div>

            <div class="flex gap-2">
                <Button
                    variant="text"
                    target="_blank"
                    to="https://www.upwork.com/freelancers/~01fe4721aa96758f98"
                    :as="NuxtLink"
                >
                    <IconBrandUpwork />
                </Button>

                <Button
                    variant="text"
                    target="_blank"
                    to="https://www.linkedin.com/in/moritz-m%C3%BCller-92b830282/"
                    :as="NuxtLink"
                >
                    <IconBrandLinkedin />
                </Button>

                <Button
                    variant="text"
                    target="_blank"
                    to="https://github.com/moritz-mm"
                    :as="NuxtLink"
                >
                    <IconBrandGithub />
                </Button>
            </div>
        </footer>
    </main>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { IconBrandGithub, IconBrandLinkedin, IconBrandUpwork } from "@tabler/icons-vue";
</script>
