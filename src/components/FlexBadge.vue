<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseIconText from './BaseIconText.vue';

defineProps<{
    label: string;
    icon?: IconDefinition;
}>();
</script>

<template>
    <span class="badge">
        <BaseIconText :label="label" :icon="icon" />
        <slot />
    </span>
</template>
