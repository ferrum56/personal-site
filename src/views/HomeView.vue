<script setup lang="ts">
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { toQIcon } from '@/utils/icon-util';
</script>

<template>
    <h1>Home View</h1>
    <p>
        This is the home view.
    </p>
    <q-icon :name="toQIcon(faXTwitter)" />
</template>

<style scoped>

</style>