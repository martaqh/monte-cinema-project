<script>
import { defineComponent } from 'vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';

import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default defineComponent({
  components: { ScreeningsSection, BreadCrumbs },

});
</script>

<template>
  <div class="screenings-page">
    <BreadCrumbs>Screenings</BreadCrumbs>
    <ScreeningsSection />
  </div>
</template>
