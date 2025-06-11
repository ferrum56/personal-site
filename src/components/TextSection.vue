<script setup lang="ts">
import { Separator } from 'reka-ui';

import TextLink from './TextLink.vue';
import { parseText, type TextData } from '@/utils/content-util';

defineProps<{
    data: TextData;
}>();
</script>

<template>
    <div class="relative pt-5 text-ri-fore">
        <h3 class="font-bold font-title text-xl">{{ data.title }}</h3>
        <Separator class="w-full h-px my-3 bg-ri-fore" orientation="horizontal" decorative />
        <div v-for="paragraph in data.text" :key="paragraph" class="font-text text-lg">
            <p>
                <template v-for="chunk in parseText(paragraph)" :key="chunk.text">
                    <TextLink v-if="chunk.type === 'link'" :to="chunk.to ?? '#'" :label="chunk.text" />
                    <template v-else>{{ chunk.text }}</template>
                </template>
            </p>
        </div>
        <slot />

        <span class="absolute font-number text-sm top-0 left-0">Archive ://</span>
        <span class="absolute font-number text-sm top-7 right-1">// No. {{ data.id }}</span>
    </div>
</template>

<style scoped>
</style>
