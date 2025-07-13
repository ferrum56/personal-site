<script setup lang="ts">
</script>

<template>
    <div class="home-banner">
        <h1 class="mb-4 font-title text-5xl font-bold uppercase">Welcome to My Website</h1>
        <p class="font-text text-xl">Scroll Down</p>
    </div>
</template>

<style scoped>
@reference "@/style.css";

.home-banner {
    @apply flex flex-col items-center justify-center;
    height: calc(100vh - var(--spacing) * 16);
}
</style>
