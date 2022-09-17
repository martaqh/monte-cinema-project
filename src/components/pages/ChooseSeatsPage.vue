<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { useRouter } from "vue-router";
import { useMoviesStore } from '@/stores/moviesStore';
import { getScreeningById } from '@/api/service/Screenings';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import ScreeningsCard from '@/components/views/ScreeningsCard.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ProgressStep from '@/components/common/ProgressStep.vue';
import CinemaHall from '@/components/views/CinemaHall.vue';

const router = useRouter();

const props = defineProps({
  screeningId: {
    type: Number,
    required: true
  }
})

const moviesStore = useMoviesStore()
const movieData = computed(() => moviesStore.getMovieByMovieId(screeningData.value.movie))


const screeningData = ref({});
const screeningDate = computed(() =>
  screeningData.value.datetime
    .substring(0, 10)
    .split('-')
    .reverse()
    .join("/")
)
const screeningTime = computed(() => screeningData.value.datetime.substring(11,16))
const screeningDayName = computed(() =>
  new Date(screeningData.value.datetime)
    .toLocaleString('en-GB', {weekday: 'long'})
)

const seatsTaken = computed(() => screeningData.value.taken_seats)
const seatsAvailable = computed(() => screeningData.value.available_seats)

const allSeats = computed(() =>
  seatsTaken.value ? seatsTaken.value.concat(seatsAvailable.value) : seatsAvailable.value)

const lastSeat = computed(() => {
  const threeCharsLabels = allSeats.value.filter(seat => seat.length === 3)
  const sortedLabels = threeCharsLabels.sort()
  return sortedLabels.slice(-1)
})

const rowsNumber = computed(() => {
  const letter = lastSeat.value[0].charAt(0).toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.indexOf(letter) + 1
})

const seatsInRow = computed(() => parseInt(lastSeat.value[0].slice(1, 3)))

const isRequestFinished = ref(false)

const getScreeningData = async () => {
  try {
    const response = await getScreeningById(props.screeningId);
    screeningData.value = response.data;
  } catch (error) {
    console.error(error)
  } finally {
    isRequestFinished.value = true
  }
}

const seatsSelected = ref([]);
const howManySeats = ref(0)

const handleSelection = (data) => {
  seatsSelected.value = data.seatsSelected
  howManySeats.value = data.seatsSelected.length
}

const goToChooseTickets = () => {
  router.push({ name: 'ChooseTicketsPage', params: {seatsSelected: seatsSelected.value}})
}

onBeforeMount(() => {
  getScreeningData()
})
</script>

<template>
  <TheContainer>
    <div class="choose-seats-page" v-if="isRequestFinished === true">
        <BreadCrumbs variant="progress-bar">
          <ProgressStep>Choose seats</ProgressStep>
        </BreadCrumbs>
        <div class="choose-seats-page__title">
          <SectionTitle>Choose your seats</SectionTitle>
        </div>
        <ScreeningsCard
          :movieData="movieData"
          usage="ChooseSeats"
          :dayName="screeningDayName"
          :date="screeningDate"
          :time="screeningTime"
        />
        <CinemaHall
          :rows="rowsNumber"
          :seats="seatsInRow"
          :seats-taken="seatsTaken"
          @seats-selected="handleSelection"
        />
        <div class="choose-seats-page__button">
          <AppButton
            color-scheme="main"
            size="large"
            @clicked="goToChooseTickets"
          >
            Choose {{ howManySeats }} seats
        </AppButton>
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.choose-seats-page {
  display: flex;
  flex-direction: column;

  > * {
    font-size: 60px;
  }

  &__button {
    margin: 64px 0;
    display: flex;
    justify-content: flex-end;
  }

  &__title {
    margin-bottom: 64px;
  }
}
</style>
