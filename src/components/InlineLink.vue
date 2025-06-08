<script setup lang="ts">
import { isExternalUrl } from '@/utils/string-util';

defineProps<{
    to: string;
    label: string;
}>();
</script>

<template>
    <a v-if="isExternalUrl(to)" :href="to" class="inline-link" target="_blank">{{ label }}</a>
    <RouterLink v-else :to="to" class="inline-link">{{ label }}</RouterLink>
</template>

<style scoped>
@reference "@/style.css";

.inline-link {
    @apply relative no-underline text-ri-glow1 hover:text-ri-glow2;
    padding-bottom: 2px;
}

.inline-link::after {
    @apply absolute left-0 bottom-0 w-0 bg-ri-glow1;
    content: "";
    height: 1px;
    transition: width 0.3s;
}

.inline-link:hover::after {
    @apply w-full;
}
</style>
