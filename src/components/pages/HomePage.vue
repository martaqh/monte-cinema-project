<script>
import { defineComponent } from 'vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import { useMoviesStore } from '@/stores/moviesStore';
import TheContainer from '@/components/common/TheContainer.vue';
import ContactSection from '@/components/views/ContactSection.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';

export default defineComponent({
  components: {
    WelcomeSection,
    MoviesSummary,
    ScreeningsSection,
    TheContainer,
    ContactSection,
    SectionTitle
  },
  setup() {
    const moviesStore = useMoviesStore();
    return { moviesStore }
  },
  beforeMount() {
    this.moviesStore.fetchMoviesToState()
  }
});
</script>

<template>
  <div class="home-page">
    <TheContainer variant='full-width'>
      <WelcomeSection />
    </TheContainer>
    <TheContainer>
      <MoviesSummary />
      <ScreeningsSection />
      <div class="home-page__contact">
        <SectionTitle>Contact us</SectionTitle>
        <ContactSection />
      </div>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $color-text-main;
  padding: 0;

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 188px;
  }
}
</style>
