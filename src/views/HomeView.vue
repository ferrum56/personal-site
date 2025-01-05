<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import TextSection from '@/components/TextSection.vue';
import { toQIcon } from '@/utils/icon-util';
import intro from '@/content/intro';
</script>

<template>
    <q-page class="home-view-elem">
        <text-section :content="intro.person" section-number="001">
            <q-btn outline square label="Learn More" to="/about" class="text-section-btn" />
        </text-section>
        <text-section :content="intro.website" section-number="002">
            <q-btn outline square :icon="toQIcon(faGithub)" label="Check on GitHub"
                   href="https://github.com/ferrum56/personal-site" target="_blank" class="text-section-btn" />
        </text-section>
    </q-page>
</template>

<style scoped>
.home-view-elem {
    margin: 1rem 0;
    padding: 0 3rem;
    border: dashed 2px lightgrey;
}

.text-section-btn {
    color: var(--theme-sky);
    border-color: var(--theme-sky);
}
</style>
