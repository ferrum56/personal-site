<script setup lang="ts">
import SmartLink from '@/components/SmartLink.vue';
import { parseRichText } from '@/utils/string-util';
import type { SectionTextContent } from '@/content/types';

defineProps<{
    content: SectionTextContent;
}>();
</script>

<template>
    <template v-for="paragraph in content.text" :key="paragraph">
        <p class="font-tw">
            <template v-for="part in parseRichText(paragraph)" :key="part">
                <template v-if="part.type === 'text'">{{ part.data }}</template>
                <smart-link v-else :to="content.links?.[part.data] ?? { description: part.data, url: '#' }" />
            </template>
        </p>
    </template>
    <q-btn v-if="content.button" v-bind="content.button" :target="content.button.href ? '_blank' : '_self'"
           outline square class="font-nsw text-content-btn" />
</template>

<style scoped>
p {
    font-size: 1rem;
}

.text-content-btn {
    color: var(--theme-sky);
    border-color: var(--theme-sky);
}
</style>
