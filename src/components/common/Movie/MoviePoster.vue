<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    }
  }
})
</script>

<template>
  <div class="movie-poster">
    <img :src="src" alt="movie poster"/>
  </div>
</template>

<style lang="scss" scoped>
.movie-poster {
  img {
    max-height: 190px;
    width: 100%;
    min-width: 98px;
    object-fit: cover;

    @include mobile {
      min-width: 68px;
    }
  }
}
</style>
