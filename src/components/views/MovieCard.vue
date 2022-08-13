<script>
import { defineComponent } from 'vue';
import TheTag from '../common/TheTag.vue';
import SectionTitle from '../common/SectionTitle.vue';
    
export default defineComponent({
    props: {
        movie: Object,
    },
    data() {
        return {
            movieData: this.movie,
        };
    },
 /*   computed: {
        filteredMovies() {
            return this.movies.filter(movie => movie.id <= 3);
        },    
    }, */
    methods: {
        durationInHours(durationInMinutes) {
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = `0${durationInMinutes % 60}`.slice(-2);
            return `${hours} h ${minutes} min`;
        }
    },
    components: { TheTag, SectionTitle }
});
</script>

<template>
    <div :class="[`movie-card card-${movieData.id}`]" >
        <SectionTitle class="movie-title" >{{ movieData.title }}</SectionTitle>
        <p class="movie-duration">{{durationInHours(movieData.length)}}</p>
        <div class="movie-poster">
            <img :src="movieData.poster_url" alt="movie poster" />
        </div>
        <TheTag>{{movieData.genre.name}}</TheTag>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    box-shadow: $shadow-card;
    padding: 40px;
    min-width: 327px;
    max-width: 444px;
    border-radius: 8px;

}

 .card-3 {
         @media only screen and (max-width: 1024px) {
        display: none;
    }
}

.movie-duration {
    font-family: $font-main;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-navbar;
}

.movie-poster {
    img {
        height: 192px;
        width: 100%;
        object-fit: cover;
    }
}

</style>