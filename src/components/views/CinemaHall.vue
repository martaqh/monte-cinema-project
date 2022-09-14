<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    rows: {
      type: Number,
    },
    seats: {
      type: Number,
    }
  },
  data(){
    return {
      ticketsCounter: 0,
      seatClicked: '',
      seatsSelected: [],
    }
  },
  emits: ['selected'],
  methods: {
    rowLetter(number){
      return String.fromCharCode(96 + number).toUpperCase()
    },
    handleClick(e) {
      e.preventDefault();
      console.log(e.target.value)
      console.log(this.seatsSelected.includes(e.target.value))
      if (this.seatsSelected.includes(e.target.value)) {
        this.seatsSelected = this.seatsSelected.filter(item => item !== e.target.value)
        console.log(this.seatsSelected)
      } else {
        this.seatsSelected.push(e.target.value)
      }
    }
  }
});
</script>

<template>
  <div class="cinema-hall">
    <p>{{seatClicked}}</p>
    <p>{{seatsSelected}}</p>
    <div v-for="row in rows" class="cinema-hall__row" :key="row">
      <div class="cinema-hall__row--letter"><span>{{ rowLetter(row) }}</span></div>
      <button class="cinema-hall__seat"
        v-for="seat in seats"
        :key="seat"
        :value="`${rowLetter(row)}${seat}`"
        @click="handleClick"
        :selected="seatsSelected.includes(`${rowLetter(row)}${seat}`)"
        >
        {{ seat }}
      </button>
      <div class="cinema-hall__row--letter"><span>{{ rowLetter(row) }}</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cinema-hall {
  display: flex;
  flex-direction: column;
  box-shadow: $shadow-card;
  padding: 40px;


  &__row {
    display: flex;
    align-items: baseline;
    margin: 5px;

    &--letter {
      font-size: 16px;
      margin: 0 50px;
      padding: 8px;
      text-align: center;
      font-family: $font-mono;
    }

  }

  &__seat {
    font-size: 16px;
    font-family: $font-main;
    width: 32px;
    height: 32px;
    background-color: $color-seat;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    &[selected='true'] {
      background-color: $color-brand;
    }
  }
}
</style>
