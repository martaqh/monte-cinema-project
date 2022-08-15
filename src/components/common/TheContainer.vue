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
.container {
    padding: 0 48px;

    @media only screen and (max-width: 480px) {
        padding: 0 24px;

        &.of-welcome-section {
            padding: 0;
        }
    }

}

</style>