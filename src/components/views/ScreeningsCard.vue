<script>
import { defineComponent } from 'vue';
import MoviePoster from '@/components/common/Movie/MoviePoster.vue';
import MovieLength from '@/components/common/Movie/MovieLength.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import MovieTitle from '@/components/common/Movie/MovieTitle.vue';
import AppTag from '@/components/common/App/AppTag.vue';
import { getScreeningsByMovieAndDate } from '@/api/service/Screenings';

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
    },
    titleSelected: {
      type: String,
      default: 'All movies',
    }
  },
  data() {
    return {
      screenings: [],
      selectedMovieId: this.movieData.id,
    }
  },
  watch: {
    daySelected(newDay, previousDay) {
      if (newDay !== previousDay) {
        this.getScreenings()
      }
    },
    titleSelected(newOption, previousOption) {
      if (newOption !== previousOption) {
        this.selectedMovieId = this.getMovieIdByTitle(this.movieData, newOption)
        this.getScreenings()
      }
      if (newOption === 'All movies') {
        this.selectedMovieId = this.movieData.id
        this.getScreenings()
      }
    }
  },
  methods: {
    getScreeningTime(screening) {
      return screening.datetime.substring(11, 16)
    },
    async getScreenings() {
      try {
        const response = await getScreeningsByMovieAndDate(this.selectedMovieId, this.daySelected);
        this.screenings = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getMovieIdByTitle(movieObject, title) {
      if (Object.values(movieObject).includes(title)) {
        return movieObject.id
      }
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
