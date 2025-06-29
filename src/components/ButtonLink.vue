<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseLink from './BaseLink.vue';
import BaseIconText from './BaseIconText.vue';

defineProps<{
    to: string;
} & ({
    label: string;
    icon?: IconDefinition;
} | {
    icon: IconDefinition;
    label?: string;
})>();
</script>

<template>
    <BaseLink :to="to" :class="label ? 'btn-link-text' : 'btn-link-icon'" class="relative btn">
        <BaseIconText :label="label" :icon="icon" class="font-title uppercase tracking-wide" />
    </BaseLink>
</template>

<style scoped>
@reference "@/style.css";

.btn-link-text {
    @apply px-10;
}

.btn-link-text::after {
    @apply absolute right-2 opacity-0 transition-all duration-500 ease-initial;
    content: "\2192";
}

.btn-link-text:hover::after {
    @apply right-4 opacity-100;
}

.btn-link-icon {
    @apply w-10 h-10 rounded-full;
}

.btn-link-icon:hover {
    @apply bg-ri-back2;
}
</style>
