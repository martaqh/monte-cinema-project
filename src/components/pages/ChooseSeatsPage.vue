<script lang="ts" setup>
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

const props = defineProps<{
  screeningId: number
}>();

const router = useRouter();

const moviesStore = useMoviesStore()
const movieData = computed(() => moviesStore.getMovieByMovieId(screeningData.value.movie))

const screeningData = ref(null);

const screeningDate = computed(() =>
  screeningData.value.datetime
    .substring(0, 10)
    .split('-')
    .reverse()
    .join("/")
)
const screeningTime = computed(() => new Date(screeningData.value.datetime).toLocaleString('en-GB', {timeStyle: 'short'}))
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

const getScreeningData = async () => {
  try {
    const response = await getScreeningById(props.screeningId);
    screeningData.value = response.data;
  } catch (error) {
    console.error(error)
  }
}

const seatsSelected = ref<string[]>([]);

const howManySeats = computed(() => seatsSelected.value.length )

const handleSelection = (data: Record<string, string[]>) => {
  seatsSelected.value = data.seatsSelected
}

const goToChooseTickets = () => {
  router.push({ name: 'ChooseTicketsPage', params: { seatsSelected: seatsSelected.value } });
}

onBeforeMount(() => {
  getScreeningData()
})
</script>

<template>
  <TheContainer>
    <div class="choose-seats-page" v-if="!!screeningData">
        <BreadCrumbs variant="progress-bar">
          <ProgressStep step="1">Choose seats</ProgressStep>
          <ProgressStep step="2" state="inactive">Book tickets</ProgressStep>
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

    @include mobile {
      justify-content: center;
    }
  }

  &__title {
    margin-bottom: 64px;
  }
}
</style>
