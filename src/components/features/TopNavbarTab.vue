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
.top-navbar-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33%;
    color: $color-text-navbar;
}
</style>