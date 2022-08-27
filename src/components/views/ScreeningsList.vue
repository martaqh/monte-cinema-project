<script>
import { defineComponent } from 'vue';
import ScreeningsCard from './ScreeningsCard.vue';
export default defineComponent({
  components: { ScreeningsCard },
  props: {
    movies: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    console.log(this.movies)
  }
})
</script>

<template>
  <div class="screenings-list">
    <ScreeningsCard v-for="movie in movies" :movieData="movie" />
  </div>
</template>

<style lang="scss" scoped>
.screeinigs-list {
  display: flex;
  flex-direction: column;
}
</style>
