<script>
import { defineComponent } from 'vue';
import MovieCard from '@/components/views/MovieCard.vue';
import TheContainer from '@/components/common/TheContainer.vue';

const movies = [
                  {
                      id: 1,
                      title: "Harry Potter and the Philosopher's Stone",
                      genre: {
                          id: 3,
                          name: "Action"
                      },
                      poster_url: "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
                      length: 159,
                      release_date: "2001-11-16",
                      description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                  },
                  {
                      id: 2,
                      title: "Harry Potter and the Order of Phoenix",
                      genre: {
                          id: 3,
                          name: "Fantasy"
                      },
                      poster_url: "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
                      length: 210,
                      release_date: "2001-11-16",
                      description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                  },
                      {
                      id: 3,
                      title: "Harry Potter and the Goblet of Fire",
                      genre: {
                          id: 3,
                          name: "Fantasy"
                      },
                      poster_url: "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
                      length: 145,
                      release_date: "2001-11-16",
                      description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                  },
            ]

export default defineComponent({
  components: { MovieCard, TheContainer },
  data() {
    return {
        movies: movies,
    };
  },
});
</script>

<template>
  <TheContainer>
    <div class="movies-summary-header">
      <p>soon <span>in the cinema</span></p>
      <a>see all</a>
    </div>
    <div class="movie-cards-wrapper">
      <MovieCard v-for="movie of movies" :key="movie.id" :movie="movie" />
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.movies-summary-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: $font-mono;
  font-weight: 700;
  font-size: 22px;
  line-height: 170%;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  margin-top: 64px;

  p {
    color: $color-text-main;
  }

  a {
    color: $color-brand;
  }

  span {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
}
.movie-cards-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 64px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
