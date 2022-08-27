<script>
import { defineComponent } from 'vue';
import TheHeader from '@/components/views/TheHeader.vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import ScreeningsFilters from '../views/ScreeningsFilters.vue';
import ScreeningsList from '../views/ScreeningsList.vue';
import ScreeningsCard from '../views/ScreeningsCard.vue';
import { getAllMovies } from '@/api/service/movies';


export default defineComponent({
  components: {
    TheHeader,
    TopNavbar,
    SignSection,
    TheContainer,
    WelcomeSection,
    MovieCard,
    MoviesSummary,
    ScreeningsFilters,
    ScreeningsCard,
    ScreeningsList,
},
   data() {
    return {
        movies: [],
        filteredMovies: [],
    };
  },
  async mounted() {
    const response = await getAllMovies();
    this.movies = response.data;
    for (let i=0; i<3; i++) {
       this.filteredMovies.push(this.movies[i])
    }
    console.log(this.movies)
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
      <MoviesSummary :movies="filteredMovies" />
      <ScreeningsFilters />
      <ScreeningsList :movies="movies" />
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
