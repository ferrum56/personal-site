<script setup lang="ts">
import { Separator } from 'reka-ui';
import { faBilibili, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import TextLink from './TextLink.vue';
import ButtonLink from './ButtonLink.vue';

const appVersion = __PROJECT_VERSION__;
</script>

<template>
    <footer class="w-full px-3 py-5 bg-gray-700">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-5 font-text">
            <div>
                <h4 class="footer-title">Resources</h4>
                <ul class="footer-list">
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site/blob/master/README.md"
                                  label="Features" />
                    </li>
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site/tree/master/docs"
                                  label="Documentation" />
                    </li>
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site/issues" label="Report Bugs" />
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">External Links</h4>
                <ul class="footer-list">
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site" label="Repository" />
                    </li>
                    <li>
                        <TextLink to="https://pages.cloudflare.com" label="Hosting Service" />
                    </li>
                    <li>
                        <TextLink to="#" label="Buy Me a Coffee" />
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">Hiring</h4>
                <ul class="footer-list">
                    <li>
                        <TextLink to="/cover-letter" label="Hire Me" />
                    </li>
                    <li>
                        <TextLink to="/resume.pdf" label="View Resume" public />
                    </li>
                    <li>
                        <TextLink to="/resume.pdf" label="Download PDF" public download />
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">Licensing</h4>
                <ul class="footer-list">
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site/blob/master/LICENSE"
                                  label="License (Software)" />
                    </li>
                    <li>
                        <TextLink to="https://github.com/ferrum56/personal-site/blob/master/README.md"
                                  label="Disclaimer (Content)" />
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <RouterLink to="/aeneid" class="font-text text-xs uppercase">Sic itur ad astra.</RouterLink>
        </div>
        <Separator class="w-full h-px mb-5 bg-ri-fore opacity-50" />
        <div class="md:flex md:items-center md:justify-between">
            <div class="flex flex-1 justify-center md:justify-start">
                <ButtonLink :icon="faGithub" to="https://github.com/ferrum56/" />
                <ButtonLink :icon="faLinkedinIn" to="https://www.linkedin.com/in/yitong-zheng/" />
                <ButtonLink :icon="faXTwitter" to="https://x.com/Ferrum_56/" />
                <ButtonLink :icon="faBilibili" to="https://space.bilibili.com/428877523" />
                <ButtonLink :icon="faEnvelope" to="/contact" />
            </div>
            <div class="flex-1 font-text text-sm text-center">
                © 2024 - {{ new Date().getFullYear() }} Alan Zheng. All Rights Reserved.
            </div>
            <div class="flex-1 mt-2 md:mt-0 md:pr-5 font-number text-sm text-center md:text-right">
                APP VER {{ appVersion || '0' }}
            </div>
        </div>
    </footer>
</template>

<style scoped>
@reference "@/style.css";

.footer-title {
    @apply mb-6 font-bold text-sm uppercase;
}

.footer-list {
    @apply opacity-70 space-y-3;
}
</style>
