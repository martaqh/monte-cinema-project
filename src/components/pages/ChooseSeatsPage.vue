<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
import { useAuthStore } from '@/stores/authStore';
import CinemaHall from '@/components/views/CinemaHall.vue';
import { getScreeningById } from '@/api/service/Screenings';

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
  components: { AppButton, CinemaHall },
  computed: {
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
  mounted() {
    this.getScreeningData()
  }
})
</script>

<template>
  <div class="choose-seats-page" v-if="isRequestFinished">
    <h2>Choose seats!</h2>
    <AppButton
      v-if="isLoggedIn"
      @click="this.auth.logout()"
    >
      Log out
    </AppButton>
    <AppButton
      :to="{ name: 'Home' }"
      color-scheme="main-reverse"
    >
      Go back to home page
    </AppButton>

    <CinemaHall
      :rows="rowsNumber"
      :seats="seatsInRow"
    />
  </div>
</template>

<style lang="scss" scoped>
.choose-seats-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  > * {
    font-size: 60px;
    margin: 20px;
  }
}
</style>
