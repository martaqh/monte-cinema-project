<script>
import { defineComponent } from 'vue';

    

    export default defineComponent({
    
});
</script>

<template>
    <div class="top-navbar-tab">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.top-navbar-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33%;
}

</style>