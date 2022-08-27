<script>
import { defineComponent } from 'vue';
import MovieCard from './MovieCard.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import { getAllMovies } from '../../api/service/movies';

export default defineComponent({
  components: { MovieCard, TheContainer },
  data() {
    return {
        movies: null,
        filteredMovies: [],
    };
  },
  async mounted() {
    const response = await getAllMovies();
    this.movies = response.data;
    for (let i=0; i<3; i++) {
       this.filteredMovies.push(this.movies[i])
    }
  }
});
</script>

<template>
  <TheContainer>
    <div class="movies-summary-header">
      <p>soon <span>in the cinema</span></p>
      <a>see all</a>
    </div>
    <div class="movie-cards-wrapper">
      <MovieCard v-for="movie of filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.movies-summary-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: $font-mono;
  font-weight: 700;
  font-size: 22px;
  line-height: 170%;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  margin-top: 64px;

  p {
    color: $color-text-main;
  }

  a {
    color: $color-brand;
  }

  span {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
}
.movie-cards-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 64px 0;

  :nth-child(2) {
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-right: 0;
    }
  }

  :nth-child(3) {
    margin-right: 0;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
