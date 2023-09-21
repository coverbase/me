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
    "primary":
        "text-white bg-gradient-to-rt from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 active:from-blue-600 active:to-blue-800",
    "text": "hover:bg-slate-100 active:bg-slate-200",
};
</script>
