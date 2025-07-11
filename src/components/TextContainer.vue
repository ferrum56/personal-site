<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="bg-ri-back2">
        <h2 class="my-5 font-title text-3xl font-bold uppercase tracking-wider">{{ title }}</h2>
        <slot />
    </div>
</template>

<style scoped>
/*
.section-corner {
    width: 20px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
    background: repeating-linear-gradient(
        45deg,
        var(--theme-sky),
        var(--theme-sky) 2px,
        var(--theme-white) 2px,
        var(--theme-white) 4px
    );
    opacity: 0.5;
}

.corner-bl {
    bottom: 5px;
    left: 5px;
    transform: rotate(270deg);
}

.corner-br {
    bottom: 5px;
    right: 5px;
    transform: rotate(180deg);
}
*/
</style>
