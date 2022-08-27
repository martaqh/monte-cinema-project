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
    },
    data() {
      return {
        screenings: [],
        hasScreenings: true,
      }
    },
    computed: {

    },
    methods: {
      getScreeningTime(screening) {
        return screening.datetime.substring(11, 16)
      }
    },
    async mounted() {
      const response = await getScreeningsByMovieAndDate(this.movieData.id, '2022-08-29');
      this.screenings = response.data;
      console.log(this.screenings)
      console.log(this.movieData)
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
}
.movie-category-and-length {
  display: flex;
  margin-bottom: 32px;
  align-items: baseline;
}

.screening-times {
  display: flex;

  button {
    margin-right: 10px;
  }
}
</style>
