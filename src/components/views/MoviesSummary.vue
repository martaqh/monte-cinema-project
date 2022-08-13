<script>
import { defineComponent } from 'vue';
import TheTag from '../common/TheTag.vue';
import SectionTitle from '../common/SectionTitle.vue';
import MovieCard from './MovieCard.vue';

const movies = [
                {
                    id: 1,
                    title: "Harry Potter and the Philosopher's Stone",
                    genre: {
                        id: 3,
                        name: "Fantasy"
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
                    length: 159,
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
                    length: 159,
                    release_date: "2001-11-16",
                    description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                },

            ]
    

export default defineComponent({
    data() {
        return {
            movies: movies,
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
    components: { MovieCard }
});
</script>

<template>
    <div class="movies-summary-header">
        <p>soon in the cinema</p>
        <a>see all</a>
    </div>
    <div class="movie-cards-wrapper">
        <MovieCard v-for="movie of movies" :key="movie.id" :movie="movie" />
    </div>
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


}

.movie-cards-wrapper {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 64px 0;
}



</style>