<script setup lang="ts">
import { useRoute } from 'vue-router';

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppPanel from '@/components/AppPanel.vue';

const route = useRoute();
</script>

<template>
    <AppHeader />
    <AppPanel class="mt-16" />
    <main :class="route.name === 'home' ? '' : 'default-main'" class="mt-16">
        <RouterView />
    </main>
    <AppFooter />
</template>

<style scoped>
.default-main {
    margin-left: 80px;
}
</style>
