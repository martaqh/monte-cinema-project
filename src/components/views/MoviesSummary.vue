<script>
import { defineComponent } from 'vue';
import MovieCard from './MovieCard.vue';
import { mapState } from "pinia";
import movies from '@/stores/moviesStore'

export default defineComponent({
  components: { MovieCard },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(movies, ["movies"]),
    filteredMovies() {
      return this.movies.slice(0,3)
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
.movies-summary__header {
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
.movie-cards__wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 64px 0;

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

  @include mobile {
    flex-direction: column;
    align-items: center;
  }
}
</style>
