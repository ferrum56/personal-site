<script setup lang="ts">
import { isExternalUrl } from '@/utils/string-util';

defineProps<{
    to: string;
}>();
</script>

<template>
    <span class="no-underline">
        <a v-if="isExternalUrl(to)" :href="to" target="_blank">
            <slot>{{ to }}</slot>
        </a>
        <RouterLink v-else :to="to">
            <slot>{{ to }}</slot>
        </RouterLink>
    </span>
</template>
