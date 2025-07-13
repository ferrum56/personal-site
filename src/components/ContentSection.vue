<script setup lang="ts">
import { Separator } from 'reka-ui';
</script>

<template>
    <section>
        <slot name="title" />
        <Separator v-if="$slots.title" class="w-full h-px my-3 bg-ri-fore" orientation="horizontal" decorative />
        <slot name="content" />
        <slot />
    </section>
</template>
