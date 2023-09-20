<template>
    <main class="flex flex-col p-8 gap-8 mx-auto max-w-6xl w-full">
        <header class="sticky top-0 flex justify-between items-center">
            <TextLink to="/"> moritzmueller.co </TextLink>

            <Button to="mailto:moritz.mueller@coverbase.co">
                <span class="px-2"> Kontaktier mich </span>
            </Button>
        </header>

        <div>
            <slot />
        </div>

        <footer class="flex items-center justify-between">
            <div></div>

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
