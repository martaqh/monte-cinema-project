<script>
import { defineComponent } from 'vue';
import MoviePoster from '../common/Movie/MoviePoster.vue';
import MovieLength from '../common/Movie/MovieLength.vue';
import AppButton from '../common/App/AppButton.vue';
import MovieTitle from '../common/Movie/MovieTitle.vue';
import AppTag from '../common/App/AppTag.vue';
import { getScreeningsByMovieAndDate } from '../../api/service/Screenings';

export default defineComponent({
  components: { MoviePoster, MovieLength, AppButton, MovieTitle, AppTag },
  props : {
    movieData: {
      type: Object,
      required: true,
    },
    daySelected: {
      type: Date,
      default: new Date().toISOString().slice(0, 10)
    }
  },
  data() {
    return {
      screenings: [],
    }
  },
  watch: {
    daySelected(newDay, previousDay) {
      if (newDay !== previousDay) {
        this.getScreenings()
      }
    }
  },
  methods: {
    getScreeningTime(screening) {
      return screening.datetime.substring(11, 16)
    },
    async getScreenings() {
      const response = await getScreeningsByMovieAndDate(this.movieData.id, this.daySelected);
      this.screenings = response.data;
    }
  },
  mounted() {
    this.getScreenings()
  }
})
</script>
<template>
  <div class="screenings-card" v-if="screenings.length > 0">
    <MoviePoster :src="movieData.poster_url" />
      <div class="movie-info">
        <MovieTitle>{{ movieData.title }}</MovieTitle>
        <div class="movie-category-and-length">
          <AppTag>{{ movieData.genre.name }}</AppTag>
          <MovieLength :lengthInMinutes="movieData.length" />
        </div>
        <div class="screening-times">
          <AppButton
            colorScheme="main-reverse"
            v-for="screening of screenings"
          >
          {{ getScreeningTime(screening) }}
          </AppButton>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.screenings-card {
  display: flex;
  box-shadow: $shadow-card;
  padding: 40px;
  margin-bottom: 40px;
}
.movie-info {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  width: 100%;
}
.movie-category-and-length {
  display: flex;
  margin-bottom: 32px;
  align-items: baseline;
}
.screening-times {
  display: flex;
  flex-wrap: wrap;

  button {
    margin-right: 10px;
    margin-top: 10px;
  }
}
</style>
