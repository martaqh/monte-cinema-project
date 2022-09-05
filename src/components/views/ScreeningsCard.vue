<script>
import { defineComponent } from 'vue';
import MoviePoster from '@/components/common/Movie/MoviePoster.vue';
import MovieLength from '@/components/common/Movie/MovieLength.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import MovieTitle from '@/components/common/Movie/MovieTitle.vue';
import AppTag from '@/components/common/App/AppTag.vue';

export default defineComponent({
  components: { MoviePoster, MovieLength, AppButton, MovieTitle, AppTag },
  props : {
    movieData: {
      type: Object,
      required: true,
    },
    movieScreenings: {
      type: Array,
      required: true,
    },
    titleSelected: {
      type: String,
      default: 'All movies',
    }
  },
  methods: {
    getScreeningTime(screening) {
      return screening.datetime.substring(11, 16)
    },
  }
})
</script>

  <template>

      <div class="screenings-card" v-if="movieScreenings.length > 0">
        <MoviePoster :src="movieData.poster_url" />
          <div class="screenings-card__movie-info">
            <router-link :to="{name: 'SingleMoviePage', params: {movieId: movieData.id}}">
              <MovieTitle>{{ movieData.title }}</MovieTitle>
            </router-link>
            <div class="screenings-card__category-and-length">
              <AppTag>{{ movieData.genre.name }}</AppTag>
              <MovieLength :lengthInMinutes="movieData.length" />
            </div>
            <div class="screenings-card__screenings-times">
              <AppButton
                v-for="screening of movieScreenings"
                color-scheme="main-reverse"
                :key="screening.id"
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
  .screenings-card__movie-info {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    width: 100%;
  }
  .screenings-card__category-and-length {
    display: flex;
    margin-bottom: 32px;
    align-items: baseline;
  }
  .screenings-card__screenings-times {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;

    button {
      margin-right: 10px;
    }
  }
  </style>
