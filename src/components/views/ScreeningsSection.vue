<script>
import { defineComponent } from 'vue';
import SectionTitle from '../common/SectionTitle.vue';
import SectionSubtitle from '../common/SectionSubtitle.vue';
import TheContainer from '../common/TheContainer.vue';
import AppLabel from '../common/AppLabel.vue';
import AppButton from '../common/AppButton.vue';
import AppSelect from '../common/AppSelect.vue';
import DatePicker from '../features/DatePicker.vue';

export default defineComponent({
  components: { SectionTitle, SectionSubtitle, TheContainer, AppLabel, AppButton, AppButton, AppSelect, AppSelect, DatePicker },
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
      let nextDays = [];
      for (let i=0; i<5; i++) {
        let day = dayDigit + i;
        console.log(day)
        if (day > 6) {
          day = day-7;
        }
        nextDays.push(days[day]);
      }
      return nextDays
    }
  }
});
</script>

<template>
  <TheContainer>
    <SectionTitle size="medium">Screenings</SectionTitle>
    <SectionSubtitle size="medium">{{ `${todaysDayName} ${todaysDate}` }}</SectionSubtitle>
    <div class="filters__wrapper">
      <div class="filters-date">
        <AppLabel>Day</AppLabel>
        <div class="days">
          <AppButton
            size="large"
            colorScheme="dark"
            variant="filter-button"
          >
          Today
          </AppButton>
          <AppButton
            size="large"
            colorScheme="dark-reverse"
            variant="filter-button"
            v-for="nextDay in nextDayNames"
            class="day-button"
          >
          {{ nextDay }}
          </AppButton>
          <div class="date-picker__wrapper">
            <DatePicker class="date-picker">
             <img src="@/assets/CalendarIcon.svg" class="calendar" alt="calendar icon" />
             </DatePicker>
          </div>
        </div>
      </div>
      <div class="filters-movie">
        <AppLabel>Movie</AppLabel>
        <AppSelect></AppSelect>
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
}

.calendar {
  color: $color-text-main;
  border: 2px solid  $color-text-main;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 10px;
  margin-left: 12px;
}
.date-picker__wrapper {
  position: relative;
  color: $color-text-main;
  border: 2px solid  $color-text-main;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 10px;
  margin-left: 12px;
  z-index: 2;
}
.date-picker {
  position: absolute;
  border: none;
  border-radius: 50%;
  z-index: 1;
}
</style>
