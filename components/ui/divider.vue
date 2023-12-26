<template>
    <hr class="self-center bg-slate-200 border-none" :class="variants[variant]" />
</template>

<script setup lang="ts">
type Variant = "horizontal" | "vertical";

withDefaults(
    defineProps<{
        variant?: Variant;
    }>(),
    {
        variant: "horizontal",
    }
);

const variants: Record<Variant, string> = {
    "horizontal": "w-full h-px",
    "vertical": "h-5 w-px",
};
</script>
