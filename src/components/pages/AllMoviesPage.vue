<script>
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import movies from '@/stores/moviesStore';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import AppInput from '@/components/common/App/AppInput.vue';

export default defineComponent({
  components: { BreadCrumbs, SectionTitle, AppSelect, MovieCard, AppInput },
  data() {
    return {
      optionSelected: 'All categories'
    }
  },
  computed: {
    ...mapState(movies, ["movies"]),
    moviesCategories() {
      const allCategories = this.movies.map(movie => movie.genre.name)
      return new Set(allCategories)
    }
  },
});
</script>

<template>
  <div class="all-movies">
    <BreadCrumbs>Movies</BreadCrumbs>
    <SectionTitle>All the movies</SectionTitle>
    <div class="all-movies__filters">
      <AppInput
        placeholder="What are you looking for?"
        label-text="search"
      />
      <AppSelect
        :options="moviesCategories"
        v-model="optionSelected"
        optionDefault="All categories"
        label-text="category"
      ></AppSelect>
    </div>
    <div class="all-movies__cards-list">
      <MovieCard
        v-for="movie of movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-movies {
  width: 100%;

  &__filters {
    margin-top: 64px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 100px;

    @include mobile {
      display: block;
    }
  }

  &__cards-list {
    margin-top: 64px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    @include tablet {
      grid-template-columns: 1fr 1fr;
    }

    @include mobile {
      grid-template-columns: 1fr;
    }
  }
}



</style>
