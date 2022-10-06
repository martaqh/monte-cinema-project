<script lang="ts" setup>
import { ref, computed, onBeforeMount } from 'vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppTag from '@/components/common/App/AppTag.vue';
import MovieLengthOrYear from '@/components/common/Movie/MovieLengthOrYear.vue';
import { getMovieById } from '@/api/service/Movies';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import type { Movie } from '@/types/movieData';

const props = defineProps<{
  movieId: string
}>();

const isRequestFinished = ref(false)
const movieData = ref<Movie | null>(null)

const getMovieDetails = async () => {
  try {
    const response = await getMovieById(props.movieId)
    movieData.value = response.data
  } catch(error) {
    console.error(error)
  } finally {
    isRequestFinished.value = true
  }
}

const movieYear = computed(() => movieData.value.release_date.substring(0,4))

onBeforeMount(() => {
  getMovieDetails()
})
</script>

<template>
  <TheContainer>
    <div class="single-movie" v-if="isRequestFinished">
      <BreadCrumbs>
        <router-link
          :to="{name: 'Movies'}"
          class="single-movie__parent-link"
        >
        <span>Movies</span>
        <img src="@/assets/ChevronRight.svg" alt="chevron right" />
        </router-link>
        {{movieData.title}}
      </BreadCrumbs>
      <div class="single-movie__details">
        <div class="single-movie__details--text">
          <SectionTitle>{{ movieData.title}}</SectionTitle>
          <div class="single-movie__details--tags">
            <AppTag>{{ movieData.genre.name }}</AppTag>
            <MovieLengthOrYear :lengthInMinutes="movieData.length" :year="movieYear"/>
          </div>
          <p class="single-movie__details--description">{{movieData.description}}</p>
        </div>
        <div class="single-movie__details--poster">
          <img :src="movieData.poster_url"/>
        </div>
      </div>
      <ScreeningsSection :singleMovie="movieData"/>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.single-movie {
  display: flex;
  flex-direction: column;

  &__parent-link {
    padding: 0 18px;
    color: $color-brand;
    cursor: pointer;
    display: flex;
    justify-content: baseline;

    span {
      margin: 0 21px;
    }
  }

  &__details {
    height: fit-content;
    margin: 0 0 32px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    @include mobile {
      display: none;
    }

    &--description {
      font-size: 22px;
      line-height: 170%;
      letter-spacing: 0.015em;
      font-family: $font-mono;
      padding-right: 64px;
    }

    &--tags {
      margin-bottom: 32px;
      display: flex;
      align-items: baseline;
    }

    &--poster {
      position: relative;
      max-width: 621px;

      img {
        position: absolute;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
