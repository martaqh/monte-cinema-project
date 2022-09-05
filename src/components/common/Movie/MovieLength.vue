<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    lengthInMinutes: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      default: '',
    }
  },
  methods: {
    lengthInHours(lengthInMinutes) {
      const hours = Math.floor(lengthInMinutes / 60);
      const minutes = `0${lengthInMinutes % 60}`.slice(-2);
      return `${hours} h ${minutes} min`;
    }
  },
})
</script>

<template>
  <p class="movie-length">
    {{ lengthInHours(lengthInMinutes) }}
    <span v-if="year !== ''">{{ year }}</span>
  </p>
</template>

<style lang="scss" scoped>
.movie-length {
  font-family: $font-main;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: $color-text-light;
  margin: 20px 0;

  span {
    margin-left: 20px;
  }

}
</style>
