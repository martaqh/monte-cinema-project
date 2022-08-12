<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
    });
</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.container {
    margin: 0 48px;
}

</style>