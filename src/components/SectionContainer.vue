<script setup lang="ts">
import type { Component } from 'vue';

import TextContent from '@/components/TextContent.vue';
import type { SectionItem, SectionTemplate } from '@/content/types';

defineProps<{
    sectionTemplate: SectionTemplate;
    no: number;
}>();

function getComponentType(item: SectionItem): Component | string {
    switch (item.type) {
        case 'text':
            return TextContent;
        default:
            return 'div';
    }
}
</script>

<template>
    <div class="relative-position q-my-lg q-px-lg q-py-md bg-theme-white section-border">
        <h5 class="q-my-md text-weight-bold text-uppercase font-nsw">{{ sectionTemplate.title }}</h5>
        <hr />
        <template v-for="item in sectionTemplate.items" :key="item">
            <component :is="getComponentType(item)" :content="item.content" />
        </template>

        <div class="absolute q-px-sm font-b bg-theme-white section-border section-header">Archive ://</div>
        <span class="absolute font-b section-number">// No. {{ no.toString().padStart(3, '0') }}</span>
        <div class="absolute section-corner corner-bl" />
        <div class="absolute section-corner corner-br" />
    </div>
</template>

<style scoped>
.bg-theme-white {
    background-color: var(--theme-white);
}

.section-border {
    border: solid 1px var(--theme-sky);
}

.section-header {
    top: -0.75rem;
    left: 1rem;
    font-size: 0.7rem;
}

.section-number {
    top: 0;
    right: 5px;
}

.section-corner {
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
