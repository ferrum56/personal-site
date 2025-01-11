<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue';
import home from '@/content/home';
</script>

<template>
    <q-page class="q-my-xl q-ml-lg q-mr-xl q-px-lg q-pt-lg">
        <section-container v-for="(section, idx) in home" :key="idx" :section-template="section" :no="idx + 1" />
    </q-page>
</template>

<style scoped>
</style>
