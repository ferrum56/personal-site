<script setup lang="ts">
import { onBeforeUpdate } from 'vue';

import SmartLink from '@/components/SmartLink.vue';
import { isString, parseCustomToken } from '@/utils/string-util';
import type { TextSectionContent } from '@/content/types';

defineProps<{
    content: TextSectionContent;
}>();

let linkIndex = 0;
onBeforeUpdate(() => linkIndex = 0);
</script>

<template>
    <div>
        <h3 class="font-nsw all-caps">{{ content.title }}</h3>
        <template v-if="isString(content.text)">
            <p class="font-tw">{{ content.text }}</p>
        </template>
        <template v-for="paragraph in content.text" v-else :key="paragraph">
            <p class="font-tw">
                <template v-for="part in parseCustomToken(paragraph)" :key="part">
                    <template v-if="part.kind === 'text'">{{ part.data }}</template>
                    <smart-link v-else :link="{ text: part.data, url: content.links[linkIndex++] }" />
                </template>
            </p>
        </template>
        <slot />
    </div>
</template>

<style scoped>
h2 {
    font-weight: 700;
}

p {
    font-size: 1rem;
}
</style>
