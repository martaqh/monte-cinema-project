<script>
import { defineComponent } from 'vue';
export default defineComponent({
    });
</script>

<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.tag {
    width: 73px;
    height: 32px;
    background: $color-tag-background;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-text-label;
    font-family: $font-main;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;
}

</style>