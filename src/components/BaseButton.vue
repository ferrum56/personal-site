<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

defineProps<{
    label?: string;
    icon?: IconDefinition;
}>();

defineOptions({
    inheritAttrs: false,
});
</script>

<template>
    <FontAwesomeIcon v-if="icon" :icon="icon" class="mr-2" />
    <span v-if="label" class="font-title uppercase tracking-wider">{{ label }}</span>
</template>
