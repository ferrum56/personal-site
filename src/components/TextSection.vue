<script setup lang="ts">
import { Separator } from 'reka-ui';

import SectionTitle from './SectionTitle.vue';

defineProps<{
    id: number;
    title: string;
}>();
</script>

<template>
    <section>
        <SectionTitle :id="id" :title="title" />
        <Separator class="w-full h-px my-3 bg-ri-white" orientation="horizontal" decorative />
        <slot />
    </section>
</template>
