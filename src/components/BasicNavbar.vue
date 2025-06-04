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
    <q-header elevated class="text-white q-pa-sm base-navbar-elem">
        <q-toolbar>
            <router-link to="/" class="row items-center q-mr-md navbar-title">
                <img src="@/assets/vue.svg" alt="Site Logo" />
                <span class="q-ml-md gt-sm">ALAN ZHENG</span>
            </router-link>
            <q-separator vertical />
            <q-btn-toggle v-model="routeButton" flat stretch toggle-color="yellow" :options="navRoutes" />
        </q-toolbar>
    </q-header>
</template>

<style scoped>
.base-navbar-elem {
    background-color: var(--theme-blue);
}

.navbar-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--theme-white);
    text-decoration: none;
}
</style>
