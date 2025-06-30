<script setup lang="ts">
import LogoBanner from '@/assets/logo-banner.svg';

defineProps<{
    id: number;
    title: string;
}>();
</script>

<template>
    <div class="relative pt-5">
        <h3 class="font-title font-bold text-xl uppercase">{{ title }}</h3>

        <LogoBanner class="absolute w-20 h-20 -top-2 left-1 opacity-30" />
        <span class="absolute top-0 left-0 font-number text-sm">Archive ://</span>
        <span class="absolute top-7 right-1 font-number text-sm">// No. {{ id }}</span>
    </div>
</template>

<style scoped>
</style>
