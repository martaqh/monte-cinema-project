<script>
import { defineComponent } from 'vue';
export default defineComponent({
});
</script>

<template>
  <select class="select">
    <option selected>All movies</option>
    <option>Star Wars</option>
    <option>Predator</option>
  </select>
</template>

<style lang="scss" scoped>
.select {
  padding: 24px 16px 24px 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: fit-content;
  font-size: 18px;
}
</style>
