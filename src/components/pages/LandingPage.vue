<script>
    import { defineComponent } from 'vue';
import TheHeader from '../views/TheHeader.vue';
import TopNavbar from '../features/TopNavbar.vue';
import SignSection from '../features/SignSection.vue';
import TheContainer from '../common/TheContainer.vue';
import WelcomeSection from '../views/WelcomeSection.vue';
import MovieCard from '../views/MovieCard.vue';
import MoviesSummary from '../views/MoviesSummary.vue';
    export default defineComponent({
    components: { TheHeader, TopNavbar, SignSection, TheContainer, WelcomeSection, MovieCard, MoviesSummary }
});
</script>

<template>
    <div class="landing-page">
        <TheContainer>
            <TheHeader>
                <TopNavbar />
                <SignSection />
            </TheHeader>
            <WelcomeSection />
            <MoviesSummary />
        </TheContainer>    
    </div>
</template>

<style lang="scss" scoped>
.landing-page {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: $color-text-main;
}

</style>