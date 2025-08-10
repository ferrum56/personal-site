<script setup lang="ts">
import { AccordionRoot } from 'reka-ui';

defineProps<{
    defaultValue: string[];
}>();
</script>

<template>
    <AccordionRoot :default-value="defaultValue" type="multiple" class="bg-ri-navy">
        <slot />
    </AccordionRoot>
</template>

<style scoped>
</style>
