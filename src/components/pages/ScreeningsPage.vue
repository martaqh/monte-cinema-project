<script>
import { defineComponent } from 'vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import TheContainer from '@/components/common/TheContainer.vue';

export default defineComponent({
  components: {
    ScreeningsSection,
    BreadCrumbs,
    TheContainer
  },
});
</script>

<template>
  <TheContainer>
  <div class="screenings-page">
    <BreadCrumbs>Screenings</BreadCrumbs>
    <ScreeningsSection />
  </div>
</TheContainer>
</template>
