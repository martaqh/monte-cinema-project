<script>
import { defineComponent } from 'vue';
import TopNavbar from './TopNavbar.vue';
import SignSection from './SignSection.vue';
    

    export default defineComponent({
    components: { TopNavbar, SignSection }
});
</script>

<template>
    <div class="header">
        <a href="/"><img src="@/assets/MonterailLogo.svg" class="logo" alt="Monterail logo" /></a>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.header {
    height: 112px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
}

</style>