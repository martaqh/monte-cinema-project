<script>
import { defineComponent } from 'vue';
import TheTag from '../common/TheTag.vue';
import SectionTitle from '../common/SectionTitle.vue';
import MovieCard from './MovieCard.vue';

export default defineComponent({
    components: { MovieCard }
});
</script>

<template>
    <div class="movies-summary-header">
        <p>soon in the cinema</p>
        <a>see all</a>
    </div>
    <div class="movies-summary">
        <MovieCard />
        
    </div>
</template>

<style lang="scss" scoped>

.movies-summary {
    display: flex;
    justify-content: space-between;
    margin: 64px 0;
}

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



</style>