<script setup lang="ts">
import socialLinks from '/content/social-links';
</script>

<template>
    <q-footer elevated class="bg-grey-8 text-white">
        <div class="row justify-center items-center">
            <q-btn v-for="link in socialLinks" :key="link.name" :icon="link.icon" :href="link.url" target="_blank"
                flat dense round class="q-ml-sm q-mr-sm text-white" aria-label="link.name" />
        </div>
        <div class="text-center q-mt-sm q-mb-md">
            © 2024 -- {{ new Date().getFullYear() }} Alan Zheng. All Rights Reserved.
        </div>
    </q-footer>
</template>

<style scoped>

</style>
