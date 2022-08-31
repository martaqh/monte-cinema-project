<script>
import { defineComponent } from 'vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import TheHeader from '@/components/views/TheHeader.vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import ScreeningsCard from '../views/ScreeningsCard.vue';

export default defineComponent({
    components: { ScreeningsSection, TheHeader, TopNavbar, SignSection, TheContainer, ScreeningsCard }
});

</script>

<template>
  <TheHeader>
    <TopNavbar />
    <SignSection />
  </TheHeader>
  <TheContainer>
    <ScreeningsSection />
  </TheContainer>
</template>
