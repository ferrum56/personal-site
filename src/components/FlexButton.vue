<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseIconText from './BaseIconText.vue';

defineProps<{
    label?: string;
    icon?: IconDefinition;
}>();
</script>

<template>
    <button class="btn">
        <BaseIconText :label="label" :icon="icon" />
    </button>
</template>

<style scoped>
/*
.block-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 0.25rem;
}
*/
</style>
