<script setup lang="ts">
import { computed, ref } from 'vue';
import { AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from 'reka-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faEye, faEyeLowVision, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

import SectionTitle from './SectionTitle.vue';

defineProps<{
    id: number;
    title: string;
    level: 'public' | 'restricted' | 'confidential';
    disabled?: boolean;
}>();

const isLocked = ref(true);
const lockIcon = computed(() => isLocked.value ? faLock : faLockOpen);
</script>

<template>
    <AccordionItem :value="id.toString()" :disabled="disabled" as="section">
        <AccordionHeader as="div" class="flex px-5 py-3 border">
            <AccordionTrigger class="flex w-full items-center justify-between group">
                <SectionTitle :id="id" :title="title" class="w-full mr-5 text-start" />
                <template v-if="disabled">
                    <FontAwesomeIcon v-if="level === 'public'" :icon="faEye" />
                    <FontAwesomeIcon v-else-if="level === 'restricted'" :icon="faEyeLowVision" />
                    <FontAwesomeIcon v-else :icon="lockIcon" />
                </template>
                <FontAwesomeIcon v-else :icon="faChevronDown" class="chevron group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent @click="isLocked = false"
                          class="content data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
            <slot />
            <div v-if="level === 'confidential' && isLocked" class="lock-panel">
                <span class="lock-panel-text">Unlock</span>
            </div>
        </AccordionContent>
    </AccordionItem>
</template>

<style scoped>
@reference "@/style.css";

.chevron {
    @apply transition-transform duration-300;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
}

.content {
    @apply relative px-2 py-3 overflow-hidden;
}

.lock-panel {
    @apply flex absolute inset-0 items-center justify-center bg-ri-white/10 cursor-pointer;
    backdrop-filter: blur(4px);
    --webkit-backdrop-filter: blur(4px);
}

.lock-panel-text {
    @apply font-title font-light text-gray-400 uppercase;
    letter-spacing: 0.25rem;
}
</style>
