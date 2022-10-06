<script>
import { defineComponent } from 'vue';
import MoviePoster from '@/components/common/Movie/MoviePoster.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import MovieTitle from '@/components/common/Movie/MovieTitle.vue';
import AppTag from '@/components/common/App/AppTag.vue';
import MovieLengthOrYear from '@/components/common/Movie/MovieLengthOrYear.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  components: { MoviePoster, AppButton, MovieTitle, AppTag, MovieLengthOrYear },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  props : {
    movieData: {
      type: Object,
      required: true,
    },
    movieScreenings: {
      type: Array,
    },
    titleSelected: {
      type: String,
      default: 'All movies',
    },
    usage: {
      type: String,
      default: 'ScreeningsSection'
    },
    dayName:{
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    }
  },
  computed: {
    hasScreeningsTimes() {
      return this.usage === 'ScreeningsSection' && this.movieScreenings.length > 0
    },
    screeningDateAndTime() {
      return `${this.dayName} ${this.date} - ${this.time}`
    }
  },
  methods: {
    getScreeningTime(screening) {
      return new Date(screening.datetime).toLocaleString('en-GB', {timeStyle: 'short'})
    },
  }
})
</script>

  <template>
    <div class="screenings-card">
      <div class="screenings-card__data-wrapper" >
        <MoviePoster :src="movieData.poster_url" usage="screenings-card" />
        <div class="screenings-card__movie-info">
          <router-link :to="{name: 'SingleMovie', params: {movieId: movieData.id}}">
            <MovieTitle>{{ movieData.title }}</MovieTitle>
          </router-link>
          <div
            class="screenings-card__category-and-length"
            :usage="usage"
          >
            <AppTag>{{ movieData.genre.name }}</AppTag>
            <MovieLengthOrYear :lengthInMinutes="movieData.length" />
          </div>
          <div class="screenings-card__screenings-times" v-if="hasScreeningsTimes">
            <AppButton
              v-for="screening of movieScreenings"
              color-scheme="main-reverse"
              usage="screenings-card"
              :key="screening.id"
              :to="{ name: 'ChooseSeatsPage'}"
              @clicked="$emit('screening-selected', { screeningId: screening.id})"
            >
            {{ getScreeningTime(screening) }}
            </AppButton>
          </div>
          <AppTag
            v-if="usage === 'ChooseSeats'"
            usage='ChooseSeats'
            class="screenings-card__screenings-times-summary--desktop"
          >
            {{ screeningDateAndTime }}
          </AppTag>
        </div>
      </div>
      <AppTag
          v-if="usage === 'ChooseSeats'"
          usage='ChooseSeats'
          class="screenings-card__screenings-times-summary--mobile"
        >
          {{ screeningDateAndTime }}
      </AppTag>
    </div>
  </template>

<style lang="scss" scoped>
.screenings-card {
  display: flex;
  flex-direction: column;
  box-shadow: $shadow-card;
  border-radius: $radius-card;
  padding: 40px;
  margin-bottom: 40px;
}

.screenings-card__data-wrapper {
  display: flex;
}

.screenings-card__movie-info {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  width: 100%;
}
.screenings-card__category-and-length {
  display: flex;
  margin-bottom: 20px;
  align-items: baseline;

  &[usage="ChooseSeats"] {
    margin-bottom: 0;
  }
}
.screenings-card__screenings-times {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;

  &-summary {
    margin-top: 20px;
    @include mobile {
      with: 100%;
      flex-direction: column;
    }

    &--desktop {
      @include mobile {
        display: none;
      }
    }

    &--mobile {
      display: none;
      @include mobile {
        display: flex;
      }
    }

  }

  a {
    margin-right: 10px;
  }
}
</style>
