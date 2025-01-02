<script setup lang="ts">
import socialLinks from '~/content/social-links';
</script>

<template>
    <q-footer elevated class="bg-grey-8 text-white">
        <div class="row justify-center items-center">
            <q-btn v-for="link in socialLinks" :key="link.name" :icon="link.icon" :href="link.url" target="_blank"
                flat dense round class="q-ml-sm q-mr-sm text-white" aria-label="link.name" />
        </div>
        <div id="footer-copyright" class="text-center q-mt-sm q-mb-md font-nsw all-caps">
            © Alan Zheng. All Rights Reserved.
        </div>
    </q-footer>
</template>

<style scoped>
#footer-copyright {
    font-size: 0.5rem;
    font-weight: 200;
}
</style>
