<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
      default: 'movie-card',
      validator(value) {
        return [
          'movie-card',
          'screenings-card'
        ].includes(value);
      },
    },
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

    }
  }
}

.movie-poster[usage="screenings-card"] {
  img {
    height: 100%;

    @include mobile {
      height: 100%;
    }
  }
}
</style>
