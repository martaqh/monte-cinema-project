<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import AppLabel from '@/components/common/App/AppLabel.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
import ScreeningsList from './ScreeningsList.vue';
import { mapActions, mapState } from "pinia";
import movies from '@/stores/moviesStore'

export default defineComponent({
  components: { SectionTitle, SectionSubtitle, AppLabel, AppButton, AppSelect, ScreeningsList },
  data() {
    return {
      isActive: false,
      activeDay: 'Today',
      optionSelected: 'All movies'
    }
  },
  computed: {
    ...mapState(movies, ["movies"]),
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
    moviesTitles() {
      const movieTitles = []
      for (let movie of this.movies) {
        movieTitles.push(movie.title)
      }
      return movieTitles
    }
  },
});
</script>

<template>
    <SectionTitle>Screenings:</SectionTitle>
    <div class="section-subtitle">
      <SectionSubtitle>{{ activeDayName }} {{ formattedActiveDayDate }}</SectionSubtitle>
    </div>
    <div class="filters__wrapper">
      <div class="filters-date">
        <AppLabel>Day</AppLabel>
        <div class="days">
          <AppButton
            :isActive="activeDay === nextDay"
            size="large"
            :colorScheme="activeDay === nextDay ? 'dark' : 'dark-reverse'"
            v-for="nextDay in nextDaysNames"
            class="day-button"
            :key="nextDay"
            @clicked="activeDay = nextDay"
          >
          {{ nextDay }}
          </AppButton>
          <div class="date-picker">
             <img src="@/assets/CalendarIcon.svg" alt="calendar icon" />
          </div>
        </div>
      </div>
      <div class="filters-movie">
        <AppLabel>Movie</AppLabel>
        <AppSelect :options="moviesTitles" v-model="optionSelected"/>
      </div>
    </div>
    <ScreeningsList :movies="movies" :daySelected="activeDayDate" :titleSelected="optionSelected" />
</template>

<style lang="scss" scoped>
.section-subtitle {
  display: flex;
  justify-content: flex-start;

  @include mobile {
    flex-direction: column;
  }
}
.filters__wrapper {
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
.filters-date {
  width: 100%;
}
.filters-movie {
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
.days {
  display: flex;
}
.day-button {
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
.date-picker {
  color: $color-text-main;
  border: 2px solid $color-text-main;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 10px;
  margin-left: 12px;
}
</style>
