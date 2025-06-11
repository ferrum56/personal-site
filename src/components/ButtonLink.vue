<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseLink from './BaseLink.vue';
import BaseIconText from './BaseIconText.vue';

defineProps<{
    to: string;
    label?: string;
    icon?: IconDefinition;
}>();
</script>

<template>
    <BaseLink :to="to" class="relative px-10 btn">
        <BaseIconText :label="label" :icon="icon" class="font-title uppercase tracking-wide" />
    </BaseLink>
</template>

<style scoped>
@reference "@/style.css";

.btn::after {
    @apply absolute right-2 opacity-0 transition-all duration-500 ease-initial;
    content: "\2192";
}

.btn:hover::after {
    @apply right-4 opacity-100;
}
</style>
