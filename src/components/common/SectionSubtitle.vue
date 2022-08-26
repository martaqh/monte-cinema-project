<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return [
          'large',
          'medium'
        ].includes(value);
      },
    },
  }
});
</script>

<template>
  <p class="section-subtitle" :size="size">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.section-subtitle {
  display: flex;
  color: $color-text-light;
  font-family: $font-title;
  font-weight: 600;
  line-height: 102%;
  letter-spacing: -0.01em;
  margin-bottom: 32px;
  p {
    width: 100%;
  }
}

.section-subtitle[size="large"] {
  font-size: 80px;

    @media only screen and (max-width: 1024px) {
      font-size: 48px;
      flex-direction: column;
    }
}

.section-subtitle[size="medium"] {
  font-size: 64px;

    @media only screen and (max-width: 1024px) {
      font-size: 48px;
    }
}
</style>
