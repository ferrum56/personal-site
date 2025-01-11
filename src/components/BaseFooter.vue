<script setup lang="ts">
import socialLinks from '@/content/social-links';

const verLocal = __PROJECT_VERSION__;
</script>

<template>
    <q-footer class="base-footer-elem">
        <div class="q-mt-sm row justify-start items-center">
            <q-btn v-for="link in socialLinks" :key="link.name" :href="link.href" :icon="link.icon"
                   :aria-label="link.name" target="_blank" flat dense round class="q-mx-xs" />
        </div>
        <div class="q-mx-sm q-mt-sm q-mb-md text-weight-light text-uppercase font-nsw footer-copyright">
            © Alan Zheng. All Rights Reserved.
        </div>
        <div class="absolute text-weight-light text-right font-b ver-decoration">APP VER {{ verLocal || '0' }}</div>
    </q-footer>
</template>

<style scoped>
.base-footer-elem {
    color: var(--theme-white);
    background: color-mix(in srgb, var(--theme-black) 80%, transparent);
}

.footer-copyright {
    font-size: 0.5rem;
}

.ver-decoration {
    bottom: 10px;
    right: 20px;
    width: 30%;
    font-size: 0.5rem;
}

.ver-decoration::before {
    content: '';
    display: block;
    height: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30px 100%);
    background: linear-gradient(
        45deg,
        var(--theme-yellow),
        var(--theme-yellow) 60%,
        transparent 60%,
        transparent 62%,
        var(--theme-yellow) 62%,
        var(--theme-white)
    );
}
</style>
