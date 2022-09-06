<script>
import { defineComponent } from 'vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import { mapActions } from "pinia";
import movies from '@/stores/moviesStore';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import TheContainer from '@/components/common/TheContainer.vue';

export default defineComponent({
  components: { ScreeningsSection, BreadCrumbs, TheContainer },
  methods: {
    ...mapActions(movies, ["getMoviesToState"]),
  },
  beforeMount() {
    this.getMoviesToState()
  }
});
</script>

<template>
  <TheContainer>
    <BreadCrumbs>Screenings</BreadCrumbs>
    <ScreeningsSection />
  </TheContainer>
</template>
