<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'quasar';
const { capitalize } = format;

import SectionContainer from '@/components/SectionContainer.vue';
import about from '@/content/about';

const aboutTabOptions = ['about me (again)', 'history (maybe)', 'hobbies (why not)', 'fun facts (not really)'];
const aboutTab = ref('about me (again)');
</script>

<template>
    <q-page class="q-my-xl q-ml-lg q-mr-xl q-px-lg q-pt-lg">
        <q-tabs v-model="aboutTab" align="justify" class="font-nsw">
            <q-tab v-for="option in aboutTabOptions" :key="option" :name="option" :label="capitalize(option)" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="aboutTab" animated>
            <q-tab-panel v-for="(section, idx) in about.slice(0, 4)" :key="idx" :name="aboutTabOptions[idx]">
                <section-container :section-template="section" :no="idx + 1" />
            </q-tab-panel>
        </q-tab-panels>
        <section-container :section-template="about[4]" :no="5" />
        <section-container :section-template="about[5]" :no="6" />
    </q-page>
</template>

<style scoped>

</style>
