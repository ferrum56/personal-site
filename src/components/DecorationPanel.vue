<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeName = computed(() => route.name);
</script>

<template>
    <div class="decoration-panel-elem">
        <transition name="side-text" mode="out-in">
            <div :key="routeName" class="side-decoration font-nsw">{{ routeName?.toUpperCase() || 'HOME' }}</div>
        </transition>
    </div>
</template>

<style scoped>
.decoration-panel-elem {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--theme-yellow);
}

.side-decoration {
    position: absolute;
    top: 0.5rem;
    left: -2rem;
    font-size: 5rem;
    font-weight: 700;
    color: transparent;
    opacity: 0.7;
    letter-spacing: -0.3rem;
    user-select: none;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
        45deg,
        transparent,
        transparent 20%,
        var(--theme-black) 0,
        var(--theme-black) 30%,
        transparent 0,
        transparent 70%,
        var(--theme-black) 0,
        var(--theme-black) 80%,
        transparent 0,
        transparent
    );
    background-repeat: repeat;
    background-position: 0 0;
    background-size: .2rem .2rem;
}

.side-text-enter-active, .side-text-leave-active {
    transition: opacity 0.5s ease;
}

.side-text-enter-from, .side-text-leave-to {
    opacity: 0;
}
</style>
