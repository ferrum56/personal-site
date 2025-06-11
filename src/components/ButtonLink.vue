<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseLink from './BaseLink.vue';
import BaseButton from './BaseButton.vue';

defineProps<{
    to: string;
    label?: string;
    icon?: IconDefinition;
}>();
</script>

<template>
    <BaseLink :to="to" class="relative px-10 btn">
        <BaseButton :label="label" :icon="icon" />
    </BaseLink>
</template>

<style scoped>
.btn::after {
    @apply absolute opacity-0;
    content: "\2192";
    right: 10px;
    transition: all 0.5s;
}

.btn:hover::after {
    @apply opacity-100;
    right: 15px;
}
</style>
