<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    usage: {
      type: String,
      default: 'ScreeningsCard'
    }
  }

})
</script>

<template>
  <div class="tag" :usage="usage">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  max-height: 32px;
  width: fit-content;
  background: $color-tag-background;
  border-radius: $radius-tag;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-text-label;
  font-family: $font-main;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 8px 16px;

  &[usage="ChooseSeats"] {
    font-family: $font-mono;
    color: $color-brand
  }
}
</style>
