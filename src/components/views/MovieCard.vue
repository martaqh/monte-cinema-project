<script>
import { defineComponent } from 'vue';
import AppTag from '@/components/common/App/AppTag.vue';
import MovieLength from '@/components/common/Movie/MovieLength.vue';
import MovieTitle from '@/components/common/Movie/MovieTitle.vue';
import MoviePoster from '@/components/common/Movie/MoviePoster.vue';

export default defineComponent({
  components: { AppTag, MovieLength, MovieTitle, MoviePoster },
  props: {
    movie: {
      type:Object,
      required: true,
    }
  },
});
</script>

<template>
  <router-link :to="{name: 'SingleMoviePage', params: {movieId: movie.id}}" class="movie-card" >
    <MovieTitle>{{ movie.title }}</MovieTitle>
    <div>
      <MovieLength :lengthInMinutes="movie.length" />
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
      margin: 12px;
      max-width: 327px;
  }
}
</style>
