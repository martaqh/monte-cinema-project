<script>
    import { defineComponent } from 'vue';
import TheHeader from '@/components/views/TheHeader.vue';
import TopNavbar from '@/components/features/TopNavbar.vue';
import SignSection from '@/components/features/SignSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import NoMatch from '@/components/views/NoMatch.vue';
import ScreeningsFilters from '../views/ScreeningsFilters.vue';
export default defineComponent({
  components: {
    TheHeader,
    TopNavbar,
    SignSection,
    TheContainer,
    WelcomeSection,
    MovieCard,
    MoviesSummary,
    NoMatch,
    ScreeningsFilters
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
    <MoviesSummary />
    <ScreeningsFilters />
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
