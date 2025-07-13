<script setup lang="ts">
import { NavigationMenuItem, NavigationMenuLink } from 'reka-ui';

defineProps<{
    to: string;
    label: string;
}>();
</script>

<template>
    <NavigationMenuItem>
        <NavigationMenuLink as-child>
            <RouterLink :to="to" class="nav-link">{{ label }}</RouterLink>
        </NavigationMenuLink>
    </NavigationMenuItem>
</template>

<style scoped>
@reference "@/style.css";

.nav-link {
    @apply flex relative h-16 items-center text-ri-cerulean uppercase border-ri-cerulean transition-all duration-150;
}

.nav-link:hover {
    @apply text-ri-glow2 border-b-3;
}

.router-link-active {
    @apply text-ri-glow2 border-b-3 border-ri-glow2;
}
</style>
