<script setup lang="ts">
import BaseLink from './BaseLink.vue';

defineProps<{
    to: string;
    label: string;
    public?: boolean;
}>();
</script>

<template>
    <BaseLink :to="to" :public="public" class="text-link">{{ label }}</BaseLink>
</template>

<style scoped>
@reference "@/style.css";

.text-link {
    @apply relative pb-px text-ri-glow1 hover:text-ri-glow2;
}

.text-link::after {
    @apply absolute left-0 bottom-0 w-0 h-px bg-ri-glow1;
    content: "";
    transition: width 0.3s;
}

.text-link:hover::after {
    @apply w-full;
}
</style>
