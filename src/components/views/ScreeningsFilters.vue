<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/SectionTitle.vue';
import SectionSubtitle from '@/components/common/SectionSubtitle.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import AppLabel from '@/components/common/AppLabel.vue';
import AppButton from '@/components/common/AppButton.vue';
import AppSelect from '@/components/common/AppSelect.vue';
import DatePicker from '@/components/features/DatePicker.vue';

export default defineComponent({
  components: { SectionTitle, SectionSubtitle, TheContainer, AppLabel, AppButton, AppSelect, DatePicker },
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
        console.log(day)
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
  <TheContainer>
    <SectionTitle>Screenings:</SectionTitle>
    <div class="section-subtitle">
      <SectionSubtitle>{{ todaysDayName }} {{ todaysDate }}</SectionSubtitle>
    </div>
    <div class="filters__wrapper">
      <div class="filters-date">
        <AppLabel>Day</AppLabel>
        <div class="days">
          <AppButton
            :isActive="activeDay === nextDay"
            size="large"
            :colorScheme="activeDay === nextDay ? 'dark' : 'dark-reverse'"
            variant="filter-button"
            v-for="nextDay in nextDayNames"
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
        <AppSelect />
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.section-subtitle {
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.filters__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
}
.filters-movie {
  margin-left: 40px;

  @media only screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-left: 0px;
  }
}
.days {
  display: flex;
}
.day-button {
  margin-left: 8px;

  &:hover {
    cursor: pointer;
  }

  &:nth-last-child(-n+3) {
    @media only screen and (max-width: 1356px) {
      display: none;
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
