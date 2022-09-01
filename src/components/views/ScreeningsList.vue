<script>
import { defineComponent } from 'vue';
import ScreeningsCard from '@/components/views/ScreeningsCard.vue';

export default defineComponent({
  components: { ScreeningsCard },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    daySelected: {
      type: Date,
      default: new Date().toISOString().slice(0, 10)
    },
    movieSelected: {
      type: String,
      default: 'All movies',
    }
  },
  data() {
    return {
      screenings: []
    }
  },
  computed: {
    filteredMovies() {
      if (this.movieSelected === 'All movies') {
        return this.movies
      } else {
        return this.movies.filter(movie => this.movieSelected === movie.title)
      }
    }
  }
})
</script>

<template>
  <div class="screenings-list">
    <ScreeningsCard
      v-for="movie in filteredMovies"
      :movieData="movie"
      :key="movie.id"
      :daySelected="daySelected"
    />
  </div>
</template>

<style lang="scss" scoped>
.screeinigs-list {
  display: flex;
  flex-direction: column;
}
</style>
