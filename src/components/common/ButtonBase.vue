<script>
import { defineComponent } from 'vue';
export default defineComponent({
});
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 40px;
  width: 100px;
  border-radius: 20px;
}
.primary {
  background-color: $color-brand;
}
</style>

