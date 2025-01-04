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
a {
    color: var(--theme-sky);
    position: relative;
    display: inline-block;
    text-decoration: none;
    background-image: linear-gradient(
            to right,
            var(--theme-sky),
            var(--theme-cyan)
    ), linear-gradient(
            to right,
            var(--theme-blue),
            var(--theme-sky)
    );
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease;
}

a:hover {
    color: var(--theme-blue);
    background-size: 0 3px, 100% 3px;
}
</style>
