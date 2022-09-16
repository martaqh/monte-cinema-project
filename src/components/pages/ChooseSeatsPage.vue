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
import AppButton from '@/components/common/App/AppButton.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ProgressStep from '@/components/common/ProgressStep.vue';

export default defineComponent({
  components: { SectionTitle, CinemaHall, TheContainer, ScreeningsCard, AppButton, BreadCrumbs, ProgressStep },
  props: {
    screeningId: {
      type: Number,
      required: true,
    }
  },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      isRequestFinished: false,
      screeningData: {},
      seatsSelected: [],
      howManySeats: 0
    }
  },
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

    seatsTaken() {
      return this.screeningData.taken_seats
    },
    seatsAvailable() {
      return this.screeningData.available_seats
    },
    allSeats() {
      return this.seatsTaken.concat(this.seatsAvailable)
    },
    lastSeat() {
      const threeCharsSeats = this.allSeats.filter(seat => seat.length === 3)
      const sortedSeats = threeCharsSeats.sort()
      return sortedSeats[sortedSeats.length-1]
    },
    rowsNumber() {
      const letter = this.lastSeat.charAt(0).toLowerCase()
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      return alphabet.indexOf(letter) + 1
    },
    seatsInRow() {
      return parseInt(this.lastSeat.slice(1, 3));
    },
    screeningDayName() {
      return new Date(this.screeningData.datetime).toLocaleString('en-GB', {weekday: 'long'});
    }

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

    handleSelection(data) {
      console.log(data)
      this.seatsSelected = data.seatsSelected
      this.howManySeats = data.seatsSelected.length
    }
  },
  beforeMount() {
    this.getScreeningData()
  }

})
</script>

<template>
   <TheContainer>
  <div class="choose-seats-page" v-if="isRequestFinished">

      <BreadCrumbs>
        <ProgressStep>Choose seats</ProgressStep>
      </BreadCrumbs>
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
        :seats-taken="seatsTaken"
        @seats-selected="handleSelection"
      />
      <div class="choose-seats-page__button">
        <AppButton
          color-scheme="main"
          @selected="handleSelection"
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

}
</style>
