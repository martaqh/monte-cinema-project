<script>
import { defineComponent } from 'vue';


    export default defineComponent({
    
});
</script>

<template>
    <div class="welcome-section">
        <div class="welcome-message">
            <h1>Welcome to the best cinema in Monterail</h1>
            <p>Best movies, best experiences, best people. 
            And all that doesn’t exist. Yikes.</p>
        </div>
        <div class="welcome-image-wrapper">
            <img src="@/assets/PeopleInCinema.png" class="welcome-image" alt="People in cinema" />    
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.welcome-section {
    height: 416px;
    width: 100%;
    display: flex;
    background-color: $color-tag-background;
}
.welcome-message {
    width: 66%;
    padding: 80px;
}

.welcome-image-wrapper {
    width: 33%;
}

.welcome-image {
    width: 100%;
    height: 100%;
}

</style>