<script setup lang="ts">
import { isExternalUrl } from '@/utils/string-util';

defineProps<{
    to: string;
}>();
</script>

<template>
    <a v-if="isExternalUrl(to)" v-bind="$attrs" :href="to" class="no-underline" target="_blank">
        <slot>{{ to }}</slot>
    </a>
    <RouterLink v-else v-bind="$attrs" :to="to" class="no-underline">
        <slot>{{ to }}</slot>
    </RouterLink>
</template>
