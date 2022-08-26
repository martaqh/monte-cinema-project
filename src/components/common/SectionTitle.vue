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
  <p class="section-title" :size="size">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.section-title {
  color: $color-text-main;
  font-family: $font-title;
  font-weight: 600;
  line-height: 102%;
  letter-spacing: -0.01em;
  margin-top: 64px;
  p {
    margin: 0;
    width: 100%;
  }
}

.section-title[size="large"] {
  font-size: 80px;
    @include tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 48px;
    }
}

.section-title[size="medium"] {
  font-size: 64px;

    @include tablet {
      font-size: 48px;
    }
    @include mobile {
      font-size: 48px;
    }
}


</style>
