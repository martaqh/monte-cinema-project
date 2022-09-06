<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    options: {
      type: Array,
    },
    optionStart: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      optionSelected: this.optionStart,
    }
  }
});
</script>

<template>
  <select class="select" v-model="optionSelected">
    <option selected>{{optionStart}}</option>
    <option v-for="option of options" :key="option">{{ option }}</option>
  </select>
</template>

<style lang="scss" scoped>
.select__wrapper {
  margin-top: 40px;
}
.select {
  padding: 17px 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
  height: 56px;
}
</style>
