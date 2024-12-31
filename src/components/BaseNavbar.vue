<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { navRoutes } from '@/router/routes';

const route = useRoute();
const routeButton = ref(route.name);

watch(
    () => route.name,
    (newName) => routeButton.value = newName,
);
</script>

<template>
    <q-header elevated class="bg-primary text-white q-pa-sm position-sticky">
        <q-toolbar>
            <q-avatar>
                <img src="/vite.svg" alt="ferrum56.com logo" />
            </q-avatar>
            <q-btn flat square stretch label="Alan Zheng" class="q-ml-md q-mr-md" to="/" aria-label="Home" />
            <q-separator vertical />
            <q-btn-toggle v-model="routeButton" flat stretch toggle-color="yellow" :options="navRoutes" />
        </q-toolbar>
    </q-header>
</template>

<style scoped>
q-header {
    top: 0;
    z-index: 10;
}
</style>
