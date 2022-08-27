<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import AppLabel from '@/components/common/App/AppLabel.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import AppSelect from '@/components/common/App/AppSelect.vue';
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
    <SectionSubtitle>{{ todaysDayName, todaysDate }}</SectionSubtitle>
    <div class="filters__wrapper">
      <div class="filters-date">
        <AppLabel>Day</AppLabel>
        <div class="days">
          <AppButton
            :isActive="this.activeDay === nextDay ? true : false"
            size="large"
            :colorScheme="this.activeDay === nextDay ? 'dark' : 'dark-reverse'"
            variant="filter-button"
            v-for="nextDay in nextDayNames"
            class="day-button"
            :key="nextDay"
            @clicked="this.activeDay=nextDay"
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
.filters__wrapper {
    display: flex;
    justify-content: space-between;
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
    @media only screen and (max-width: 1024px) {
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
