<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'basic',
      validator(value) {
        return [
          'basic',
          'hero',
          'form'
        ].includes(value);
      },
    }
  }
});
</script>

<template>
  <div class="container" :variant="variant">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 0 24px;
}

.container[variant="full-width"] {
  @include mobile {
    padding: 0;
    margin: 0;
  }
}
.container[variant="form"] {
    max-width: 603px;
    min-width: 220px;
    margin: 64px auto 0;
}
</style>
