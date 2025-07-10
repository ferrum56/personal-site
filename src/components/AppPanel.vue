<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="app-panel">
        <transition name="side-text" mode="out-in">
            <div :key="route.name as unknown as string" class="panel-text">{{ route.name || 'HOME' }}</div>
        </transition>
    </div>
</template>

<style scoped>
@reference "@/font.css";

.app-panel {
    @apply hidden lg:flex fixed -z-1;
    width: 80px;
}

.panel-text {
    @apply absolute top-2 -left-8 font-title text-8xl font-bold uppercase text-transparent select-none;
    @apply bg-repeat bg-top-left bg-clip-text;
    letter-spacing: -0.4rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    background-size: 0.2rem 0.2rem;
    background-image: linear-gradient(
        45deg,
        transparent,
        transparent 20%,
        var(--color-ri-cerulean) 0,
        var(--color-ri-cerulean) 30%,
        transparent 0,
        transparent 70%,
        var(--color-ri-cerulean) 0,
        var(--color-ri-cerulean) 80%,
        transparent 0,
        transparent
    );
    -webkit-background-clip: text;
}

.side-text-enter-active, .side-text-leave-active {
    transition: opacity 0.25s ease;
}

.side-text-enter-from, .side-text-leave-to {
    opacity: 0;
}
</style>
