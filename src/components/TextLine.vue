<script setup lang="ts">
import TextLink from './TextLink.vue';
import { parseText } from '@/utils/content-util';

defineProps<{
    text: string;
}>();

defineOptions({
    inheritAttrs: false,
});
</script>

<template>
    <template v-for="chunk in parseText(text)" :key="chunk.text">
        <TextLink v-if="chunk.type === 'link'" :to="chunk.to || '#'" :label="chunk.text" />
        <template v-else-if="chunk.type === 'redact'">{{ '\u25a0'.repeat(chunk.length || 3) }}</template>
        <template v-else>{{ chunk.text }}</template>
    </template>
</template>
