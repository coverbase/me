<template>
    <component
        class="flex items-center font-semibold gap-2 p-2 truncate cursor-pointer rounded-lg disabled:pointer-events-none disabled:opacity-50"
        :class="variants[variant]"
        :type="type"
        :is="as"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { Component } from "vue";

type Variant = "primary" | "secondary" | "highlight" | "text";

withDefaults(
    defineProps<{
        as?: Component | string;
        variant?: Variant;
        type?: "button" | "submit";
    }>(),
    {
        as: "button",
        variant: "primary",
        type: "button",
    }
);

const variants: Record<Variant, string> = {
    "primary":
        "text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 active:from-blue-400 active:to-blue-300",
    "text": "hover:bg-slate-100 active:bg-slate-200",
};
</script>
