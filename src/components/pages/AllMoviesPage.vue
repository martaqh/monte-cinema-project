<script>
import { defineComponent } from 'vue';
import { mapState } from "pinia";
import movies from '@/stores/moviesStore';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import AppInput from '@/components/common/App/AppInput.vue';
import AppLabel from '@/components/common/App/AppLabel.vue';

export default defineComponent({
  components: { BreadCrumbs, SectionTitle, AppSelect, MovieCard, AppInput, AppLabel },
  data() {
    return {
      optionSelected: 'All categories',
      inputContent: '',
    }
  },
  computed: {
    ...mapState(movies, ["movies"]),
    moviesCategories() {
      const allCategories = this.movies.map(movie => movie.genre.name)
      return new Set(allCategories)
    },
    filteredMovies() {
      if (this.optionSelected !== 'All categories') {
        return this.movies.filter(movie => this.optionSelected === movie.genre.name)
      } else {
        return this.movies
      }
    },
    moviesSearched() {
      if (this.inputContent !== '') {
        return this.filteredMovies.filter(movie => movie.title.toLowerCase().includes(this.inputContent.toLowerCase()))
      } else {
        return this.filteredMovies
      }
    },

  }
});
</script>

<template>
  <div class="all-movies">
    <BreadCrumbs>Movies</BreadCrumbs>
    <SectionTitle size="large">All the movies</SectionTitle>
    <div class="all-movies__filters">
      <div class="all-movies__filters--select">
        <p>{{inputContent}}</p>
        <AppLabel>Search</AppLabel>
        <AppInput
          placeholder="What are you looking for?"
          v-model="inputContent"
        />
      </div>
      <div class="all-movies__filters--select">
        <AppLabel>Category</AppLabel>
        <AppSelect
          :options="moviesCategories"
          v-model="optionSelected"
          optionStart="All categories"
          label-text="category"
        ></AppSelect>
      </div>
    </div>
    <div class="all-movies__cards-list">
      <MovieCard
        v-for="movie of moviesSearched"
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

    &--select, &--input {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

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
