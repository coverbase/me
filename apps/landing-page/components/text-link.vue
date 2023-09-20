<template>
    <NuxtLink :class="variants[variant]" :to="to">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
type Variant = "primary" | "secondary";

withDefaults(
    defineProps<{
        to: string;
        variant?: Variant;
    }>(),
    {
        variant: "primary",
    }
);

const variants: Record<Variant, string> = {
    "primary": "hover:text-blue-500 font-semibold",
    "secondary": "text-slate-800 hover:text-blue-500",
};
</script>
