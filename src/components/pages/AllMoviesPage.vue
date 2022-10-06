<script>
import { defineComponent } from 'vue';
import { useMoviesStore } from '@/stores/moviesStore';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
import MovieCard from '@/components/views/MovieCard.vue';
import AppInput from '@/components/common/App/AppInput.vue';
import TheContainer from '@/components/common/TheContainer.vue';

export default defineComponent({
  components: {
    BreadCrumbs,
    SectionTitle,
    AppSelect,
    MovieCard,
    AppInput,
    TheContainer
  },
  data() {
    return {
      optionSelected: 'All categories',
      inputContent: '',
    }
  },
  setup() {
    const moviesStore = useMoviesStore();
    return { moviesStore }
  },
  computed: {
    moviesFilteredByCategory() {
      if (this.optionSelected !== 'All categories') {
        return this.moviesStore.movies.filter(movie => this.optionSelected === movie.genre.name)
      } else {
        return this.moviesStore.movies
      }
    },
    moviesFilteredByCategoryAndSearch() {
      if (this.inputContent !== '') {
        return this.moviesFilteredByCategory.filter(movie => movie.title.toLowerCase().includes(this.inputContent.toLowerCase()))
      } else {
        return this.moviesFilteredByCategory
      }
    },
  }
});
</script>

<template>
  <div class="all-movies">
    <TheContainer>
      <BreadCrumbs>Movies</BreadCrumbs>
      <SectionTitle size="large">All the movies</SectionTitle>
      <div class="all-movies__filters">
        <div class="all-movies__filters--select">
          <AppInput
            placeholder="What are you looking for?"
            v-model="inputContent"
            label="search"
          />
        </div>
        <div class="all-movies__filters--select">
          <AppSelect
            :options="moviesCategories"
            v-model="optionSelected"
            label="category"
            optionStart="All categories"
          ></AppSelect>
        </div>
      </div>
      <div class="all-movies__cards-list">
        <MovieCard
          v-for="movie of moviesFilteredByCategoryAndSearch"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.all-movies {
  width: 100%;

  &__filters {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 100px;

    &--select, &--input {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 16px;
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
