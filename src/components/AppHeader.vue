<script setup lang="ts">
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuRoot, Separator } from 'reka-ui';

import NavLink from './NavLink.vue';
import { routes } from '@/router/routes';
import LogoNav from '@/assets/logo-nav.svg';
</script>

<template>
    <header>
        <NavigationMenuRoot class="header-nav">
            <NavigationMenuList class="flex space-x-8">
                <NavigationMenuItem>
                    <NavigationMenuLink as-child>
                        <RouterLink to="/">
                            <LogoNav class="size-16" />
                        </RouterLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <Separator orientation="vertical" />
                <NavLink v-for="route in routes.slice(1, 6)" :key="route.name" :to="route.path" :label="route.name" />
            </NavigationMenuList>
        </NavigationMenuRoot>
    </header>
</template>

<style scoped>
@reference "@/style.css";
@reference "@/font.css";

.header-nav {
    @apply flex fixed w-full top-0 left-0 sm:pl-8 items-center justify-between;
    @apply font-title font-bold bg-ri-back1/90 border-b-2 border-ri-separator shadow-2xl backdrop-blur-lg z-50;
}
</style>
