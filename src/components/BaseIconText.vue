<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

defineProps<{
    label: string;
    icon?: IconDefinition;
} | {
    icon: IconDefinition;
    label?: string;
}>();

defineOptions({
    inheritAttrs: false,
});
</script>

<template>
    <FontAwesomeIcon v-if="icon" :icon="icon" :class="label ? 'mr-2' : ''" />
    <span v-if="label" v-bind="$attrs">{{ label }}</span>
</template>
