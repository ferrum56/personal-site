<script setup lang="ts">
import FlexBadge from './FlexBadge.vue';
import type { ListItem } from '@/utils/content-util';

defineProps<{
    content: ListItem[];
}>();
</script>

<template>
    <ul class="pl-5 font-text">
        <li v-for="item in content" :key="item.label" class="flex flex-wrap">
            <span class="mr-2 font-bold uppercase">[{{ item.label }}]</span>
            <template v-if="Array.isArray(item.value)">
                <FlexBadge v-for="badge in item.value" :key="badge" :label="badge"
                           :to="{ path: '/skills', query: { category: badge } }" class="capitalize" />
            </template>
            <span v-else>{{ item.value }}</span>
            <slot v-if="item.slot" :name="item.slot" />
        </li>
    </ul>
</template>
