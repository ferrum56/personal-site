<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { debounce } from 'quasar';

import BasicNavbar from '@/components/BasicNavbar.vue';
import BasicFooter from '@/components/BasicFooter.vue';
import DecorationPanel from '@/components/DecorationPanel.vue';

const leftPanelOpen = ref(false);

const toggleLeftPanel = debounce(() => leftPanelOpen.value = window.innerWidth > 800, 100);

onMounted(() => window.addEventListener('resize', toggleLeftPanel));
onUnmounted(() => window.removeEventListener('resize', toggleLeftPanel));
</script>

<template>
    <q-layout view="hHh lpR fff">
        <basic-navbar class="font-nsw" />
        <q-drawer v-model="leftPanelOpen" :width="100" show-if-above :breakpoint="500" side="left" draggable="false"
                  no-swipe-open no-swipe-close no-swipe-backdrop>
            <decoration-panel />
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
        <basic-footer />
    </q-layout>
</template>

<style scoped>
</style>
