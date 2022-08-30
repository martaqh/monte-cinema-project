<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import AppLabel from '@/components/common/App/AppLabel.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';

export default defineComponent({
  components: { SectionTitle, SectionSubtitle, AppLabel, AppButton, AppSelect },
  data() {
    return {
      isActive: false,
      activeDay: 'Today',
    }
  },
  computed: {
    todaysDate() {
      return new Date().toLocaleDateString('en-GB');
    },
    todaysDayName() {
      return new Date().toLocaleString('en-US', {weekday: 'long'});
    },
    nextDayNames() {
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
  },
});
</script>

<template>
  <div class="screenings-filters">
      <SectionTitle>Screenings:</SectionTitle>
      <div class="screenings-filters__section-subtitle">
        <SectionSubtitle>{{ todaysDayName }} {{ todaysDate }}</SectionSubtitle>
      </div>
      <div class="screenings-filters__wrapper">
        <div class="screenings-filters__by-date">
          <AppLabel>Day</AppLabel>
          <div class="screenings-filters__days-buttons">
            <AppButton
              :is-active="activeDay === nextDay"
              size="large"
              :color-scheme="activeDay === nextDay ? 'dark' : 'dark-reverse'"
              v-for="nextDay in nextDayNames"
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
          <AppSelect />
        </div>
      </div>
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
