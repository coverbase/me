<template>
    <NuxtLink class="hover:text-blue-500 font-semibold" :to="to">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>
