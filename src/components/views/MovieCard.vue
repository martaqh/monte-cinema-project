<script>
import { defineComponent } from 'vue';
import AppTag from '@/components/common/AppTag.vue';
import SectionTitle from '@/components/common/SectionTitle.vue';

export default defineComponent({
    components: { AppTag, SectionTitle },
    props: {
        movie: {
          type:Object,
          required: true,
        }
    },
    data() {
        return {
            movieData: this.movie,
        };
    },
    methods: {
        durationInHours(durationInMinutes) {
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = `0${durationInMinutes % 60}`.slice(-2);
            return `${hours} h ${minutes} min`;
        }
    },
});
</script>

<template>
    <div :class="[`movie-card card-${movieData.id}`]" >
        <p class="movie-title" >{{ movieData.title }}</p>
        <p class="movie-duration">{{durationInHours(movieData.length)}}</p>
        <div class="movie-poster">
            <img :src="movieData.poster_url" alt="movie poster" />
        </div>
        <AppTag>{{movieData.genre.name}}</AppTag>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    box-shadow: $shadow-card;
    padding: 40px;
    width: 421px;
    border-radius: $radius-card;
    margin-right: 40px;

    @media only screen and (max-width: 768px) {
        margin: 12px;
        width: 250px;
    }
}
.card-2 {
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin-right: 0;
    }
    @media only screen and (max-width: 768px) {
      margin: 0px;
    }
}
.card-3 {
    margin-right: 0;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      margin: 12px 0 0 0;
    }
}
.movie-duration {
    font-family: $font-main;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-light;
}
.movie-poster {
    img {
        height: 192px;
        width: 100%;
        object-fit: cover;
    }
}

.movie-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  font-family: $font-main;
}
</style>
