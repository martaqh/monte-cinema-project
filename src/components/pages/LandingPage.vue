<script>
    import { defineComponent } from 'vue';
import TheHeader from '../TheHeader.vue';
import TopNavbar from '../TopNavbar.vue';
import SignSection from '../SignSection.vue';
import TheContainer from '../common/TheContainer.vue';
import WelcomeSection from '../WelcomeSection.vue';
    export default defineComponent({
    components: { TheHeader, TopNavbar, SignSection, TheContainer, WelcomeSection }
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
        </TheContainer>    
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.landing-page {
   display: flex;
   flex-direction: column;
}

</style>