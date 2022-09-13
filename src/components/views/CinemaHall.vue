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
  methods: {
    rowLetter(n){
      return String.fromCharCode(96 + n).toUpperCase()
    }
  }
});
</script>

<template>
  <div class="cinema-hall">
    <div v-for="row in rows" class="cinema-hall__row" :key="row">
      <div class="cinema-hall__row--letter"><span>{{ rowLetter(row) }}</span></div>
      <div class="cinema-hall__seat" v-for="seat in seats" :key="seat">
        <span>{{ seat }}</span>
      </div>
      <div class="cinema-hall__row--letter"><span>{{ rowLetter(row) }}</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cinema-hall {
  display: flex;
  flex-direction: column;


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
  }
}
</style>
