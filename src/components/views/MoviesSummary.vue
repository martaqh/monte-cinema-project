<script>
import { defineComponent } from 'vue';
import MovieCard from './MovieCard.vue';
import { useMoviesStore } from '@/stores/moviesStore';

export default defineComponent({
  components: { MovieCard },
  setup() {
    const moviesStore = useMoviesStore();
    return { moviesStore }
  },
  computed: {
    filteredMovies() {
      return this.moviesStore.movies.slice(0,3)
    }
  },
});
</script>

<template>
  <div class="movies-summary">
    <div class="movies-summary__header">
      <p>soon <span>in the cinema</span></p>
      <a>see all</a>
    </div>
    <div class="movie-cards__wrapper">
      <MovieCard v-for="movie of filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movies-summary {
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  width: 100%;

  &__header {
    width: 100%;
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
      @include mobile {
        display: none;
      }
    }
  }
}
.movie-cards__wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin: 64px 0;

  @include tablet {
    grid-template-columns: 1fr 1fr;
  }

  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :nth-child(2) {
    @include tablet {
      margin-right: 0;
    }
  }

  :nth-child(3) {
    margin-right: 0;

    @include tablet {
      display: none;
    }
  }
}
</style>
