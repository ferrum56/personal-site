<script setup lang="ts">
import { openURL } from 'quasar';

import { isExternalLink } from '@/utils/string-util';
import type { TextLink } from '@/content/types';

defineProps<{
    to: TextLink;
}>();
</script>

<template>
    <a v-if="isExternalLink(to.url)" :href="to.url" @click.prevent="openURL(to.url)">{{ to.description }}</a>
    <router-link v-else :to="to.url">{{ to.description }}</router-link>
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
