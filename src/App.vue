<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { debounce } from 'quasar';

import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import DecorationPanel from '@/components/DecorationPanel.vue';

const leftPanelOpen = ref(false);

const toggleLeftPanel = debounce(() => leftPanelOpen.value = window.innerWidth > 800, 100);

onMounted(() => window.addEventListener('resize', toggleLeftPanel));
onUnmounted(() => window.removeEventListener('resize', toggleLeftPanel));
</script>

<template>
    <!--    <div>-->
    <!--        <a href="https://vite.dev" target="_blank">-->
    <!--            <img src="/vite.svg" class="logo" alt="Vite logo" />-->
    <!--        </a>-->
    <!--        <a href="https://vuejs.org/" target="_blank">-->
    <!--            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
    <!--        </a>-->
    <!--    </div>-->
    <q-layout view="hHh lpR fff">
        <base-navbar class="font-nsw" />
        <q-drawer v-model="leftPanelOpen" :width="100" show-if-above :breakpoint="500" side="left" draggable="false"
                  no-swipe-open no-swipe-close no-swipe-backdrop>
            <decoration-panel />
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
        <base-footer />
    </q-layout>
</template>

<style scoped>
</style>
