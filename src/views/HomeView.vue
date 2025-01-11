<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue';
import home from '@/content/home';
</script>

<template>
    <q-page class="q-ma-lg q-px-lg home-view-elem">
        <template v-for="(section, idx) in home" :key="idx">
            <section-container :section-template="section" :no="idx + 1" />
        </template>
    </q-page>
</template>

<style scoped>
.home-view-elem {
    border: dashed 2px lightgrey;
}
</style>
