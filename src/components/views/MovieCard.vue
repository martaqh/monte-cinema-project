<script>
import { defineComponent } from 'vue';
import TheTag from '../common/TheTag.vue';
import SectionTitle from '../common/SectionTitle.vue';

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
                    }
                },
                    {
                    id: 1,
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
    computed: {
        filteredMovies() {
            return this.movies.filter(movie => movie.id <= 3);
        },    
    },
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
    <div class="movie-card" v-for="movie in filteredMovies">
        <SectionTitle class="movie-title" >{{ movie.title }}</SectionTitle>
        <p class="movie-duration">{{durationInHours(movie.length)}}</p>
        <div class="movie-poster">
            <img :src="movie.poster_url" alt="movie poster" />
        </div>
        <TheTag>{{movie.genre.name}}</TheTag>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    box-shadow: $shadow-card;
    padding: 40px;
    width: 421px;
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