<script setup lang="ts">
import LogoSimple from '@/assets/logo-simple.svg';
</script>

<template>
    <nav class="hidden-nav">
        <RouterLink to="/" class="hidden-home">
            <LogoSimple class="w-8 h-8" />
        </RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped>
@reference "@/style.css";

.hidden-nav {
    @apply flex fixed w-24 h-24 items-center justify-center opacity-0;
}

.hidden-nav:hover {
    @apply opacity-100;
}

.hidden-home {
    @apply flex p-1 items-center justify-center text-gray-900 bg-white rounded-full;
}

.hidden-home:hover {
    @apply bg-gray-200;
}
</style>
