<script lang="ts" setup>
import { defineComponent } from 'vue';
import AppTag from '@/components/common/App/AppTag.vue';
import MovieTitle from '@/components/common/Movie/MovieTitle.vue';
import MoviePoster from '@/components/common/Movie/MoviePoster.vue';
import MovieLengthOrYear from '@/components/common/Movie/MovieLengthOrYear.vue';
import type { Movie } from '@/types/movieData'

const props = defineProps<{
  movie: Movie
}>();
</script>

<template>
  <router-link :to="{name: 'SingleMovie', params: {movieId: movie.id}}" class="movie-card" >
    <MovieTitle>{{ movie.title }}</MovieTitle>
    <div>
      <MovieLengthOrYear :lengthInMinutes="movie.length" />
      <MoviePoster :src="movie.poster_url" />
      <AppTag>{{movie.genre.name}}</AppTag>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: $shadow-card;
  padding: 40px;
  max-width: 421px;
  border-radius: $radius-card;

  @include tablet {
    max-width: 444px;
  }

  @include mobile {
    width: 100%;
  }
}
</style>
