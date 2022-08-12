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
    margin: 0 48px;
}

</style>