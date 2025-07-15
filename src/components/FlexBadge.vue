<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import BaseIconText from './BaseIconText.vue';

defineProps<{
    label: string;
    icon?: IconDefinition;
    to?: RouteLocationRaw;
}>();
</script>

<template>
    <RouterLink v-if="to" v-bind="$attrs" :to="to" class="badge badge-link">
        <BaseIconText :label="label" :icon="icon" />
    </RouterLink>
    <span v-else v-bind="$attrs" class="badge">
        <BaseIconText :label="label" :icon="icon" />
    </span>
</template>
