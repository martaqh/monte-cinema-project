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
    border-radius: $radius-card;
    margin-right: 40px;

    @include mobile {
      margin: 12px 0;
    }
}
.card-2 {
    @include desktop {
      margin-right: 0;
    }
    @include tablet {
      margin-right: 0;
    }
    @include mobile {
      margin: 0px;
    }
}
.card-3 {
    margin-right: 0;

    @include desktop {
      display: none;
    }

    @include tablet {
      display: none;
    }

    @include mobile {
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
