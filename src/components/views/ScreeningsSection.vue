<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import AppLabel from '@/components/common/App/AppLabel.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
import ScreeningsList from '@/components/views/ScreeningsList.vue';
import { getScreeningsByDateAndMovie } from '@/api/service/Screenings';

export default defineComponent({
  components: { SectionTitle, SectionSubtitle, AppLabel, AppButton, AppSelect, ScreeningsList },
  props: {
    movies: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      screenings: [],
      isActive: false,
      activeDay: 'Today',
      optionSelected: 'All movies'
    }
  },
  computed: {
    nextDaysNames() {
      const dayDigit = new Date().getDay() + 1;
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let nextDays = ['Today'];
      for (let i=0; i<5; i++) {
        let day = dayDigit + i;
        if (day > 6) {
          day = day-7;
        }
        nextDays.push(days[day]);
      }
      return nextDays
    },
    activeDayDate() {
      const activeDayIndex = this.nextDaysNames.indexOf(this.activeDay)
      const today = new Date()
      let activeDay = new Date()
      activeDay.setDate(today.getDate() + activeDayIndex)
      return activeDay
    },
    formattedActiveDayDate() {
      const date = this.activeDayDate.toISOString().slice(0, 10)
      return date.split('-').reverse().join("/")
    },
    activeDayName() {
      return this.activeDayDate.toLocaleString('en-GB', {weekday: 'long'});
    },
    sectionSubtitle() {
      return `${this.activeDayName} ${this.formattedActiveDayDate}`;
    },
    moviesTitles() {
      return this.movies.map(movie => movie.title);
    },
    screeningsFilteredByDate() {
      return this.screenings.filter
      (screening => screening.datetime.slice(0,10) === this.activeDayDate.toISOString().slice(0, 10))
    }
  },
  methods: {
    async getScreenings() {
      try {
        const response = await getScreeningsByDateAndMovie();
        this.screenings = response.data;
        console.log(this.screenings)
      } catch(error) {
        console.error(error)
      }
    },
  },
  mounted() {
    this.getScreenings()
  }
});
</script>

<template>
  <div class="screenings">
    <div class="screenings-filters">
      <SectionTitle>Screenings:</SectionTitle>
      <div class="screenings-filters__section-subtitle">
        <SectionSubtitle>{{ sectionSubtitle }}</SectionSubtitle>
      </div>
      <div class="screenings-filters__wrapper">
        <div class="screenings-filters__by-date">
          <AppLabel>Day</AppLabel>
          <div class="screenings-filters__days-buttons">
            <AppButton
              v-for="nextDay in nextDaysNames"
              :is-active="activeDay === nextDay"
              size="large"
              :color-scheme="activeDay === nextDay ? 'dark' : 'dark-reverse'"
              class="screenings-filters__day-button"
              :key="nextDay"
              @clicked="activeDay = nextDay"
            >
            {{ nextDay }}
            </AppButton>
            <div class="screenings-filters__date-picker">
                <img src="@/assets/CalendarIcon.svg" alt="calendar icon" />
            </div>
          </div>
        </div>
        <div class="screenings-filters__by-movie">
          <AppLabel>Movie</AppLabel>
          <AppSelect :options="moviesTitles" v-model="optionSelected" />
        </div>
      </div>
  </div>
  <ScreeningsList
    :movies="movies"
    :screenings="screeningsFilteredByDate"
    :daySelected="activeDayDate"
    :movieSelected="optionSelected" />
  </div>
</template>

<style lang="scss" scoped>
.screenings-filters__section-subtitle {
  display: flex;
  justify-content: flex-start;

  @include mobile {
    flex-direction: column;
  }
}
.screenings-filters__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;

  @include tablet {
    flex-direction: column;
  }
  @include mobile {
    flex-direction: column;
  }
}
.screenings-filters__by-date {
  width: 100%;
}
.screenings-filters__by-movie {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @include tablet {
    margin-top: 40px;
    margin-left: 0px;
  }
  @include mobile {
    margin-top: 40px;
    margin-left: 0px;
  }
}
.screenings-filters__days-buttons {
  display: flex;
}
.screenings-filters__day-button {
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }

  &:nth-last-child(-n+3) {
    display: none;

    @include desktop-large {
      display:block;
    }
  }
}
.screenings-filters__date-picker {
  color: $color-text-main;
  border: 2px solid $color-text-main;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 10px;
  margin-left: 12px;
}
</style>
