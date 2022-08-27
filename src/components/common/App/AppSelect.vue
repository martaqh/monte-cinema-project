<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      optionSelected: 'All movies',
      options: ['Predator', 'Star Wars', 'Harry Potter']
    }
  }
});
</script>

<template>
  <select class="select">
    <option selected>{{this.optionSelected}}</option>
    <option v-for="option of options">{{ option }}</option>
  </select>
</template>

<style lang="scss" scoped>
.select {
  padding: 1rem 2rem;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: fit-content;
  font-size: 18px;
}
</style>
