<script setup lang="ts">
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
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
    <q-layout view="hHh lpR fFf">
        <base-navbar class="font-nsw" />
        <q-page-container>
            <router-view />
        </q-page-container>
        <base-footer />
    </q-layout>
</template>

<style scoped>

</style>
