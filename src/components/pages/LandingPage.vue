<script>
import { defineComponent } from 'vue';
import TheHeader from '@/components/views/TheHeader.vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import { mapActions, mapState } from "pinia";
import movies from '@/stores/moviesStore'

export default defineComponent({
  components: {
    TheHeader,
    TopNavbar,
    SignSection,
    WelcomeSection,
    MovieCard,
    MoviesSummary,
    ScreeningsSection,
    TheContainer,
    MoviesSummary,
    ScreeningsSection,
    ScreeningsSection
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
  <div class="landing-page">
    <TheHeader>
      <TopNavbar />
      <SignSection />
    </TheHeader>
    <WelcomeSection />
    <TheContainer>
      <MoviesSummary />
      <ScreeningsSection />
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $color-text-main;
  margin: 0 auto;
  padding: 0;
}
</style>
