<script>
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {

  }
});
</script>
<template>
  <div class="validation-message">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.validation-message {
  font-size: 14px;
  font-family: $font-main;
  color: $color-text-main;
  letter-spacing: 0.04em;
  line-height: 170%;

  .valid {
      color: $color-success;
  }

  .notValid {
      color: $color-brand;
  }

  p {
      margin: 0;
      padding: 0;
  }
}
</style>
