<template>
    <NuxtLink class="p-2 rounded font-semibold cursor-pointer" :class="variants[variant]" :to="to">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
type Variant = "primary" | "text";

withDefaults(
    defineProps<{
        variant?: Variant;
        to?: string;
    }>(),
    {
        variant: "primary",
    }
);

const variants: Record<Variant, string> = {
    "primary": "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
    "text": "hover:bg-slate-100 active:bg-slate-200",
};
</script>
