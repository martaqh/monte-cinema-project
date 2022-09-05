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
    },
    screenings: {
      type: Object,
      required: true,
    }
  },
  computed: {
    filteredMovies() {
      if (this.movieSelected !== 'All movies') {
        return this.movies.filter(movie => this.movieSelected === movie.title)
      }
      return this.movies
    },
  },
})
</script>

  <template>
    <div class="screenings-list">
      <ScreeningsCard
        v-for="movie in filteredMovies"
        :movieData="movie"
        :key="movie.id"
        :movieScreenings="this.screenings.filter(screening => screening.movie === movie.id)"
      />
    </div>
  </template>

  <style lang="scss" scoped>
  .screeinigs-list {
    display: flex;
    flex-direction: column;
  }
  </style>
