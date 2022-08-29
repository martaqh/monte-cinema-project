<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      optionSelected: 'All movies',
      options: ['Predator', 'Star Wars', 'Harry Potter and the Goblet of Fire']
    }
  }
});
</script>

<template>
  <select class="select">
    <option selected>{{optionSelected}}</option>
    <option v-for="option of options" :key="option">{{ option }}</option>
  </select>
</template>

<style lang="scss" scoped>
.select {
  padding: 17px 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
}
</style>
