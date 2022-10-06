<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

const props = defineProps<{
  rows: number,
  seats: number,
  seatsTaken: string[]
}>();

const emit = defineEmits<{
  (e: 'seats-selected', seatsSelected: Record<string, string[]>): void
}>()

const seatsSelected = ref<string[]>([]);

const rowLetter = (rowNumber: number) => {
  return String.fromCharCode(96 + rowNumber).toUpperCase();
}

const isSeatTaken = (seat: string) => {
  return props.seatsTaken.includes(seat)
}

const handleClick = (seatValue: string) => {
  if (!props.seatsTaken.includes(seatValue)) {
    if (seatsSelected.value.includes(seatValue)) {
      seatsSelected.value = seatsSelected.value.filter(item => item !== seatValue);
    }
    else {
      seatsSelected.value.push(seatValue);
    }
    emit('seats-selected', { seatsSelected: seatsSelected.value })
  }
}
</script>

<template>
  <div class="cinema-hall" data-spec="matrix">
    <div v-for="row in rows" class="cinema-hall__row" :key="row" data-spec="row">
      <div
        class="cinema-hall__row--letter"
      >
        <span data-spec="letter">{{ rowLetter(row) }}</span>
      </div>
      <button class="cinema-hall__seat"
        v-for="seat in seats"
        :key="seat"
        data-spec="seat"
        :row-letter="rowLetter(row)"
        :value="`${rowLetter(row)}${seat}`"
        :taken="isSeatTaken(`${rowLetter(row)}${seat}`)"
        @click="handleClick(`${rowLetter(row)}${seat}`)"
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
