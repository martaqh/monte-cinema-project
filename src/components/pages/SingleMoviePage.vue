<script>
import { defineComponent } from 'vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppTag from '@/components/common/App/AppTag.vue';
import MovieLength from '@/components/common/Movie/MovieLength.vue';
import { getMovieById } from '@/api/service/Movies';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';

export default defineComponent({
  components: { BreadCrumbs, SectionTitle, AppTag, MovieLength, ScreeningsSection },
  data() {
    return {
      movieData: {},
      screenings: [],

    }
  },
  computed: {
    movieIdFromUrl() {
      const url = window.location.pathname
      const segments = url.split("/")
      return segments[2]
    },
    movieYear() {
      return this.movieData.release_date
    }
  },
  methods: {
    async getMovieDetails() {
      try {
        const response = await getMovieById(this.movieIdFromUrl)
        console.log(response.data)
        this.movieData = response.data

      } catch(error) {
        console.error(error)
      }
    },
  },
  mounted() {
    this.getMovieDetails()
    console.log(this.movieData)
    console.log(this.url)
  }
})
</script>

<template>
  <div class="single-movie">
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
          <AppTag>{{ movieData.genre}}</AppTag>
          <MovieLength :lengthInMinutes="movieData.length" :year="movieYear"/>
        </div>
        <p class="single-movie__details--description">{{movieData.description}}</p>
      </div>
      <div class="single-movie__details--poster">
        <img :src="movieData.poster_url"/>
      </div>
    </div>
    <ScreeningsSection :singleMovie="[movieData]"/>
  </div>
</template>

<style lang="scss" scoped>
.single-movie {
  display: flex;
  flex-direction: column;

  &__parent-link {
    padding: 21px;
    color: $color-brand;
    cursor: pointer;

    span {
      margin: 21px;
    }
  }

  &__details {
    height: fit-content;
    margin: 0 0 32px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;

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