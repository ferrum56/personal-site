<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

defineProps<{
    label?: string;
    icon?: IconDefinition;
}>();
</script>

<template>
    <span>
        <FontAwesomeIcon v-if="icon" :icon="icon" class="mr-2" />
        <span v-if="label" class="font-title uppercase tracking-wider">{{ label }}</span>
    </span>
</template>
