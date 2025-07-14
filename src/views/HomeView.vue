<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import HomeBanner from '@/components/HomeBanner.vue';
import TextContainer from '@/components/TextContainer.vue';
import TextSection from '@/components/TextSection.vue';
import TextContent from '@/components/TextContent.vue';
import ButtonLink from '@/components/ButtonLink.vue';
import FlexBadge from '@/components/FlexBadge.vue';
import type { TextData } from '@/utils/content-util';
import homeData from '@/assets/content/home.json';

const meData = homeData.data.me as TextData;
const siteData = homeData.data.site as TextData;
</script>

<template>
    <HomeBanner />
    <TextContainer title="Brief Introduction" class="intro-container">
        <TextSection :id="meData.id" :title="meData.title">
            <TextContent :content="meData.text" />
            <ButtonLink to="/about" label="Learn More" class="mt-3 btn-ri" />
        </TextSection>
        <TextSection :id="siteData.id" :title="siteData.title">
            <TextContent :content="siteData.text" />
            <div class="flex my-3">
                <FlexBadge :icon="faHashtag" label="Tech" class="badge-decor" />
                <FlexBadge :icon="faHashtag" label="Minimalism" class="badge-decor" />
                <FlexBadge :icon="faHashtag" label="Industrial" class="badge-decor" />
                <FlexBadge :icon="faHashtag" label="Futurism" class="badge-decor" />
            </div>
            <ButtonLink :icon="faGithub" to="https://github.com/ferrum56/personal-site/" label="View on GitHub"
                        class="btn-ri" />
        </TextSection>
    </TextContainer>
</template>

<style scoped>
@reference "@/style.css";

.intro-container {
    @apply m-5 lg:ml-[80px] p-10 space-y-5;
}
</style>
