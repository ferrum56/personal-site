<script setup lang="ts">
import { openURL } from 'quasar';

import { isExternalLink } from '@/utils/string-util';
import type { InTextLink } from '@/content/types';

defineProps<{
    link: InTextLink;
}>();
</script>

<template>
    <a v-if="isExternalLink(link.url)" :href="link.url" @click.prevent="openURL(link.url)">{{ link.text }}</a>
    <router-link v-else :to="link.url">{{ link.text }}</router-link>
</template>

<style scoped>

</style>
