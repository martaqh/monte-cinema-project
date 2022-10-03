<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    state: {
      type: String,
      default: 'active',
      validator(value) {
        return [
          'active',
          'inactive',
        ].includes(value);
      },
    },
    step: {
      type: String,
      default: '1'
    }
  }
})
</script>

<template>
  <div
    class="progress-step"
    :state="state"
  >
  <img v-if="step === '1' && state === 'active'" src="@/assets/circle1Active.svg" />
  <img v-if="step === '2' && state === 'active'" src="@/assets/circle2Active.svg" />
  <img v-if="step === '1' && state === 'inactive'" src="@/assets/circle1Inactive.svg" />
  <img v-if="step === '2' && state === 'inactive'" src="@/assets/circle2Inactive.svg" />
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
  margin: 16px;
  padding: 10px;
  padding-right: 20px;
  border: 2px solid $color-text-main;

  img {
    margin-right: 12px;
  }
}

.progress-step[state="inactive"] {
  border: 2px solid $color-inactive-step;
  color: $color-inactive-step;
}
</style>
