<script setup lang="ts">
import TextLine from './TextLine.vue';

defineProps<{
    content: string[];
}>();
</script>

<template>
    <article class="font-text text-lg">
        <p v-for="paragraph in content" :key="paragraph">
            <TextLine :text="paragraph" />
        </p>
    </article>
</template>
