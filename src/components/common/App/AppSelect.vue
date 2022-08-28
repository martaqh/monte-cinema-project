<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    options: {
      type: Array,
    }
  },
  data() {
    return {
      optionSelected: 'All movies',
      optionDefault: 'All movies'
    }
  }
});
</script>

<template>
  <select class="select" v-model="optionSelected">
    <option selected>{{optionDefault}}</option>
    <option v-for="option of options">{{ option }}</option>
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
