<script setup lang="ts">
import TextLine from './TextLine.vue';

defineProps<{
    article: string[];
}>();
</script>

<template>
    <article class="font-text text-lg">
        <p v-for="paragraph in article" :key="paragraph">
            <TextLine :text="paragraph" />
        </p>
    </article>
</template>
