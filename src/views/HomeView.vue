<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import TextSection from '@/components/TextSection.vue';
import { toQIcon } from '@/utils/icon-util';
import intro from '@/content/intro';
</script>

<template>
    <q-page>
        <text-section :content="intro.person">
            <q-btn outline square label="Learn More" to="/about" />
        </text-section>
        <text-section :content="intro.website">
            <q-btn :icon="toQIcon(faGithub)" label="Check Source on GitHub" href="https://github.com/ferrum56/personal-site" target="_blank" />
        </text-section>
    </q-page>
</template>

<style scoped>

</style>
