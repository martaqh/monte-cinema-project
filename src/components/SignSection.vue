<script>
    import { defineComponent } from 'vue';
import ButtonlikeLink from './common/ButtonlikeLink.vue';

    export default defineComponent({
    components: { ButtonlikeLink }
});
</script>

<template>
    <div class="sign-section">
        <ButtonlikeLink class="tertiary">Register</ButtonlikeLink>
        <ButtonlikeLink class="primary">Log in</ButtonlikeLink>  
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.sign-section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 345px;
    height: 100%;
    font-family: $font-mono;
    font-size: 16px;
}

</style>