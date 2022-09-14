<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import CinemaHall from '@/components/views/CinemaHall.vue';
import { getScreeningById } from '@/api/service/Screenings';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import { mapActions } from "pinia";
import movies from '@/stores/moviesStore';
import ScreeningsCard from '@/components/views/ScreeningsCard.vue';

export default defineComponent({
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  props: {
    screeningId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      isRequestFinished: false,
      screeningData: {},
    }
  },
  components: { SectionTitle, CinemaHall, TheContainer, ScreeningsCard },
  computed: {
    movieData() {
      return this.getMovieByMovieId(this.screeningData.movie)
    },
    screeningDate() {
      return this.screeningData.datetime.substring(0, 10).split('-').reverse().join("/")
    },
    screeningTime() {
      return this.screeningData.datetime.substring(11,16)
    },
    isLoggedIn() {
      return this.auth.isLoggedIn
    },
    allSeats() {
      const available = this.screeningData.available_seats
      const taken = this.screeningData.taken_seats
      return available.concat(taken)
    },
    lastSeat() {
      return this.allSeats[this.allSeats.length-1]
    },
    rowsNumber() {
      const letter = this.lastSeat.charAt(0).toLowerCase()
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      return alphabet.indexOf(letter) + 1
    },
    seatsInRow() {
      return parseInt(this.lastSeat.slice(1, 3));
    },
  },
  methods: {
    ...mapActions(movies, ['getMovieByMovieId']),
    async getScreeningData() {
      try {
        const response = await getScreeningById(this.screeningId);
        this.screeningData = response.data;
        console.log(this.screeningData)
      } catch (error) {
        console.error(error)
      } finally {
        this.isRequestFinished = true
      }
    },
  },
  beforeMount() {
    this.getScreeningData()
  }

})
</script>

<template>
  <div class="choose-seats-page" v-if="isRequestFinished">
    <TheContainer>
      <SectionTitle>Choose your seats</SectionTitle>
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
      />
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.choose-seats-page {
  display: flex;
  flex-direction: column;
  align-items: center;


  > * {
    font-size: 60px;
    margin: 20px;
  }
}
</style>
