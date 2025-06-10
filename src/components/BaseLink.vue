<script setup lang="ts">
import { isExternalUrl } from '@/utils/string-util';

defineProps<{
    to: string;
    label: string;
}>();
</script>

<template>
    <span class="no-underline">
        <a v-if="isExternalUrl(to)" :href="to" target="_blank">{{ label }}</a>
        <RouterLink v-else :to="to">{{ label }}</RouterLink>
    </span>
</template>
