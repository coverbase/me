<template>
    <main class="flex flex-col p-6 sm:p-8 gap-16 mx-auto max-w-6xl w-full">
        <header class="flex justify-between items-center">
            <TextLink to="/" class="sm:text-lg"> moritzmueller.co </TextLink>

            <Button to="mailto:moritz.mueller@coverbase.co">
                <span class="px-2"> Kontakt aufnehmen </span>
            </Button>
        </header>

        <slot />

        <footer class="flex items-center justify-between">
            <TextLink to="/impressum" variant="secondary"> Impressum </TextLink>

            <div class="flex gap-2">
                <Button
                    variant="text"
                    target="_blank"
                    to="https://www.upwork.com/freelancers/~01fe4721aa96758f98"
                >
                    <IconBrandUpwork />
                </Button>

                <Button
                    variant="text"
                    target="_blank"
                    to="https://www.linkedin.com/in/moritz-m%C3%BCller-92b830282/"
                >
                    <IconBrandLinkedin />
                </Button>

                <Button variant="text" target="_blank" to="https://github.com/moritz-mm">
                    <IconBrandGithub />
                </Button>
            </div>
        </footer>
    </main>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconBrandUpwork } from "@tabler/icons-vue";
</script>
