<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    rows: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    seatsTaken: {
      type: Array,
      required: true
    }
  },
  emits: ["seats-selected"],
  setup(props, context) {

    const rowLetter = (rowNumber) => {
      return String.fromCharCode(96 + rowNumber).toUpperCase();
    }

    const isSeatTaken = (seat) => {
      return props.seatsTaken.includes(seat)
    }

    const seatsSelected = ref([]);

    const handleClick = (e) => {
      e.preventDefault();
      if (!props.seatsTaken.includes(e.target.value)) {
        if (seatsSelected.value.includes(e.target.value)) {
          seatsSelected.value = seatsSelected.value.filter(item => item !== e.target.value);
        }
        else {
          seatsSelected.value.push(e.target.value);
        }
        context.emit('seats-selected', { seatsSelected: seatsSelected.value})
      }
    }
    return {
      seatsSelected,
      rowLetter,
      handleClick,
      isSeatTaken
    };
  },
})
</script>

<template>
  <div class="cinema-hall">
    <div v-for="row in rows" class="cinema-hall__row" :key="row">
      <div class="cinema-hall__row--letter"><span>{{ rowLetter(row) }}</span></div>
      <button class="cinema-hall__seat"
        v-for="seat in seats"
        :key="seat"
        :value="`${rowLetter(row)}${seat}`"
        :taken="isSeatTaken(`${rowLetter(row)}${seat}`)"
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
  border-radius: $radius-card;
  padding: 40px;
  margin-top: 64px;
  align-items: center;

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
      color: $color-text-reverse;
    }

    &[taken='true'] {
      background-color: $color-text-light;
      color: $color-text-reverse;
      cursor: not-allowed;
    }
  }
}
</style>
