<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'active',
      validator(value) {
        return [
          'active',
          'inactive',
        ].includes(value);
      },
    }
  }
})
</script>

<template>
  <div
    class="progress-step"
    :color-scheme="variant"
  >
  <img src="@/assets/ProgressCircle1Active.svg" />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.progress-step {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: $radius-button;
  font-family: $font-mono;
  font-size: 16px;
  padding: 10px;
  padding-right: 20px;
  border: 2px solid $color-text-main;

  img {
    margin-right: 12px;
  }
}
</style>
