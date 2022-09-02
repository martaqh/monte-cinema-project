<script>
import { defineComponent } from 'vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import { mapActions } from "pinia";
import movies from '@/stores/moviesStore'

export default defineComponent({
  components: {
    WelcomeSection,
    MoviesSummary,
    ScreeningsSection,
  },
  methods: {
    ...mapActions(movies, ["getMoviesToState"]),
  },
  beforeMount() {
    this.getMoviesToState()
  }
});
</script>

<template>
  <div class="home-page">
    <WelcomeSection />
    <MoviesSummary />
    <ScreeningsSection />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $color-text-main;

  padding: 0;
}
</style>
