<script setup lang="ts">
import { onBeforeUpdate } from 'vue';

import SmartLink from '@/components/SmartLink.vue';
import { isString, parseCustomToken } from '@/utils/string-util';
import type { TextSectionContent } from '@/content/types';

defineProps<{
    content: TextSectionContent;
    sectionNumber: string;
}>();

let linkIndex = 0;
onBeforeUpdate(() => linkIndex = 0);
</script>

<template>
    <div class="text-section-elem">
        <h5 class="font-nsw all-caps">{{ content.title }}</h5>
        <hr />
        <template v-if="isString(content.text)">
            <p class="font-tw">{{ content.text }}</p>
        </template>
        <template v-for="paragraph in content.text" v-else :key="paragraph">
            <p class="font-tw">
                <template v-for="part in parseCustomToken(paragraph)" :key="part">
                    <template v-if="part.kind === 'text'">{{ part.data }}</template>
                    <smart-link v-else :link="{ text: part.data, url: content.links?.[linkIndex++] || '#' }" />
                </template>
            </p>
        </template>
        <slot />

        <div class="section-header font-b">Archive ://</div>
        <span class="section-numer font-b">// No. {{ sectionNumber }}</span>
        <div class="corner-shape corner-bl" />
        <div class="corner-shape corner-br" />
    </div>
</template>

<style scoped>
.text-section-elem {
    position: relative;
    margin: 2rem 0;
    padding: 1rem 2rem;
    background-color: var(--theme-white);
    border: solid 1px var(--theme-sky);
}

h5 {
    font-weight: 700;
    margin: 1rem 0;
}

p {
    font-size: 1rem;
}

.section-header {
    position: absolute;
    top: -0.75rem;
    left: 1rem;
    padding: 0 0.5rem;
    font-size: 0.7rem;
    background-color: var(--theme-white);
    border: solid 1px var(--theme-sky);
}

.section-numer {
    position: absolute;
    top: 0;
    right: 5px;
}

.corner-shape {
    position: absolute;
    width: 20px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
    background: repeating-linear-gradient(
        45deg,
        var(--theme-sky),
        var(--theme-sky) 2px,
        var(--theme-white) 2px,
        var(--theme-white) 4px
    );
    opacity: 0.5;
}

.corner-bl {
    bottom: 5px;
    left: 5px;
    transform: rotate(270deg);
}

.corner-br {
    bottom: 5px;
    right: 5px;
    transform: rotate(180deg);
}
</style>
